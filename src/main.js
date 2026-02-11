import { createApp } from 'vue/dist/vue.esm-bundler.js'

createApp({
    data() {
        return {
            projects: [],
            loading: true,
            error: null
        }
    },
    async mounted() {
        await this.loadProjects()
    },
    methods: {
        async loadProjects() {
            try {
                this.loading = true
                this.error = null
                
                // Fetch the CSV file
                const response = await fetch('/projects.csv')
                if (!response.ok) {
                    throw new Error('Failed to load projects data')
                }
                
                const csvText = await response.text()
                this.projects = this.parseCSV(csvText)
                
            } catch (err) {
                this.error = 'Error loading project data: ' + err.message
                console.error('Error loading projects:', err)
            } finally {
                this.loading = false
            }
        },
        
        parseCSV(text) {
            const lines = text.trim().split('\n')
            if (lines.length < 2) {
                return []
            }
            
            // Get headers from first line
            const headers = lines[0].split(',').map(h => h.trim())
            
            // Parse data rows
            const projects = []
            for (let i = 1; i < lines.length; i++) {
                const values = lines[i].split(',').map(v => v.trim())
                const project = {}
                
                headers.forEach((header, index) => {
                    project[header] = values[index] || ''
                })
                
                projects.push(project)
            }
            
            return projects
        }
    }
}).mount('#app')

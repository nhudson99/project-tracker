import { createApp } from 'vue'
import Papa from 'papaparse'

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
                
                // Use PapaParse for robust CSV parsing
                const parsed = Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    transformHeader: (header) => header.trim()
                })
                
                if (parsed.errors.length > 0) {
                    console.warn('CSV parsing warnings:', parsed.errors)
                }
                
                this.projects = parsed.data
                
            } catch (err) {
                this.error = 'Error loading project data: ' + err.message
                console.error('Error loading projects:', err)
            } finally {
                this.loading = false
            }
        }
    }
}).mount('#app')

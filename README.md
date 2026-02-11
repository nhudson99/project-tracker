# Project Tracker Dashboard

A simple Vue 3 dashboard that displays project information from a CSV file with visual status indicators.

## Features

- 📊 **Dashboard View**: Clean, modern interface displaying all project data
- 📄 **CSV Data Storage**: Project information stored in `public/projects.csv`
- 🎨 **Color-Coded Status**: 
  - 🟢 GREEN = Good status
  - 🔴 RED = Bad status
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🔗 **Clickable Website Links**: Direct access to project websites

## Data Structure

The CSV file (`public/projects.csv`) contains the following columns:
- **clients**: Client name
- **needs**: Project requirements
- **deliverables**: What will be delivered
- **dates**: Project deadline
- **websites**: Client website URL
- **website status**: Status indicator (good/bad)

## Getting Started

### Prerequisites
- Node.js (v20.19.0 or higher, or v22.12.0+)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/nhudson99/project-tracker.git
cd project-tracker
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
project-tracker/
├── public/
│   └── projects.csv      # Project data
├── src/
│   └── main.js          # Vue application logic
├── index.html           # Main HTML file with Vue template
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## Customization

### Adding New Projects

Edit `public/projects.csv` and add a new row with the project information:

```csv
Client Name,Project Need,Deliverables,Date,website.com,good
```

### Changing Colors

Modify the CSS in `index.html` to customize the color scheme:
- `.status-good`: Green status badge
- `.status-bad`: Red status badge
- Background gradient and table styling

## Technologies Used

- **Vue 3**: Progressive JavaScript framework
- **Vite**: Fast build tool and development server
- **CSV**: Simple data storage format

## License

ISC

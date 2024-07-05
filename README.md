# Schedule Generator

Create your personalized schedule by selecting date ranges and days of the week. This tool helps visualize structured data in an easy-to-understand format based on user preferences.

[![screenshot](https://github.com/Valik3201/nextjs-schedule-generator/blob/main/assets/screenshot-0.png)](https://github.com/Valik3201/nextjs-schedule-generator/blob/main/assets/screenshot-0.png)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Components](#components)
- [Configuration](#configuration)
- [Contributing](#contributing)

## Overview

The Schedule Generator is a React-based application built with Next.js. It allows users to create and visualize schedules based on custom date ranges and selected days of the week. Each period is represented as a week starting from a user-defined start date, and includes only the selected days within those periods.

## Features

- Select a date range to define the schedule period.
- Choose specific days of the week to include in the schedule.
- Visualize the generated schedule in a structured table format.
- Support for multiple languages.
- Option to display dates in Roman numerals.
- **NEW:** Ability to delete a specific period from the generated schedule.

## Tech Stack

- Framework: [Next.js](https://nextjs.org/)
- Styling: [TailwindCSS](https://tailwindcss.com/)
- UI Components: [shadcn/ui](https://ui.shadcn.com/)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/valik3201/nextjs-schedule-generator.git
   ```

2. **Navigate to the project directory:**

   ```sh
   cd nextjs-schedule-generator
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

4. **Start the development server:**

   ```sh
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000`.

## Usage

1. **Setup your schedule parameters:**

   - Select the start and end dates for your schedule.
   - Choose the days of the week you want to include.

2. **Generate the schedule:**

   - Click the "Generate" button to create your schedule based on the selected parameters.

3. **View the schedule:**

   - The generated schedule will be displayed in a table format, showing each period with the corresponding dates.

4. **Delete a period:**
   - If a particular week should not be included, click the "Delete" button next to the period to remove it from the schedule.

## Example

### Description of the Application

This application is a utility for creating and displaying structured data based on a user-selected date range and a set of days of the week. It allows the user to configure the generation parameters and view the results in a convenient format where each entry represents a specific period of time, starting from the specified start date, and includes the selected days of the week within each of these periods. For example, if the user selects a date range and chooses Monday and Wednesday, the schedule will contain week numbers and the corresponding dates of these Mondays and Wednesdays.

### Example Workflow

1. **Select Date Range:**

   - Choose the start and end dates for the schedule.

2. **Select Days of the Week:**

   - Choose specific days (e.g., Monday, Wednesday) to include in the schedule.

3. **Generate and View Schedule:**

   - Click the "Generate" button to create the schedule.
   - View the generated schedule, which will display periods (starting from 1) and the selected days within those periods.

4. **Delete a Period:**
   - If a certain week should not be included, click the "Delete" button next to that period to remove it.

Example Output:

```
0: { period: 'I', dates: '8, 10 Jul 2024'}
1: { period: 'II', dates: '15, 17 Jul 2024'}
2: { period: 'III', dates: '22, 24 Jul 2024'}
...
```

[![screenshot](https://github.com/Valik3201/nextjs-schedule-generator/blob/main/assets/screenshot-1.png)](https://github.com/Valik3201/nextjs-schedule-generator/blob/main/assets/screenshot-1.png)

## Configuration

### Localization

The application supports multiple languages. Localization files are located in the `app/[lang]/dictionaries` directory.

### Custom Styles

Tailwind CSS is used for styling. Configuration can be found in `tailwind.config.ts`.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

[![screenshot](https://github.com/Valik3201/nextjs-schedule-generator/blob/main/assets/screenshot-2.png)](https://github.com/Valik3201/nextjs-schedule-generator/blob/main/assets/screenshot-2.png)

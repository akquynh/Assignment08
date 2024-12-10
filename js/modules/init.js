export async function loadEmployees() {
    try {
        // Correct relative path to employees.json
        const response = await fetch('../data/employees.json');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json(); // Return JSON data
    } catch (error) {
        console.error("Error fetching employees:", error);
        return []; // Return an empty array to avoid crashes
    }
}
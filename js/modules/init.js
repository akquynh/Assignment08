export async function loadEmployees() {
    try {
        const response = await fetch('../data/employees.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const employees = await response.json();
        return employees;
    } catch (error) {
        console.error("Error loading employees:", error);
    }
}
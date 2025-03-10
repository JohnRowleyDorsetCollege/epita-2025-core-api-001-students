function init() {
    console.log('init');

    // Event listener for form submission
    document.getElementById("studentForm").addEventListener("submit", addStudent);
    document.getElementById("libraryForm").addEventListener("submit", addLibrary);
    FetchStudents()
    FetchLibrary()
}

async function FetchStudents() {
    console.log('FetchStudents')
    try {
        const response = await fetch('https://localhost:7276/api/Student');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const tableBody = document.querySelector('#studentTable tbody');

        tableBody.innerHTML = '';

        const students = await response.json();

        students.forEach(student => {

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.age}</td>
                <td>${student.course}</td>`
            tableBody.appendChild(row);

        });


        console.log({ students });

    } catch (error) {

        console.error(`HTTP error! status: ${response.status}`);

    }



}


async function FetchLibrary() {
    console.log('FetchLibrary')
    try {
        const response = await fetch('https://localhost:7276/api/Library');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const tableBody = document.querySelector('#libraryTable tbody');

        tableBody.innerHTML = '';

        const books = await response.json();

        books.forEach(book => {

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.year}</td>
                <td>${book.genre}</td>`
            tableBody.appendChild(row);

        });


        console.log({ books });

    } catch (error) {

        console.error(`HTTP error! status: ${response.status}`);

    }



}

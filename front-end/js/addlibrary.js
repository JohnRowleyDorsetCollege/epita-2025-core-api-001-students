      // Function to add a new student
      const apiLibraryUrl = "https://localhost:7276/api/Library";
      
      async function addLibrary(event) {
        event.preventDefault(); // Prevent form from refreshing page

        const name = document.getElementById("name").value.trim();
        const age = parseInt(document.getElementById("age").value, 10);
        const course = document.getElementById("course").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!name || !age || !course) {
            alert("Please fill in all fields.");
            return;
        }

        const newStudent = { name, age, course, email };

        try {
            const response = await fetch(apiLibraryUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newStudent)
            });

            if (!response.ok) {
                throw new Error("Failed to add student.");
            }

            document.getElementById("libraryForm").reset(); // Clear form
            FetchLibrary(); // Refresh student list
        } catch (error) {
            console.error("Error adding student:", error);
        }
    }
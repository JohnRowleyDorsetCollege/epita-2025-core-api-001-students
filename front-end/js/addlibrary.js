      // Function to add a new student
      const apiLibraryUrl = "https://localhost:7276/api/Library";
      
      async function addLibrary(event) {
        event.preventDefault(); // Prevent form from refreshing page

        const author = document.getElementById("author").value.trim();
        const year = parseInt(document.getElementById("year").value, 10);
        const genre = document.getElementById("genre").value.trim();
        const title = document.getElementById("title").value.trim();

        // if (!name || !age || !course) {
        //     alert("Please fill in all fields.");
        //     return;
        // }

        const newBook = { author, title, genre, year };

        try {
            const response = await fetch(apiLibraryUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newBook)
            });

            if (!response.ok) {
                throw new Error("Failed to add student.");
            }

            document.getElementById("libraryForm").reset(); // Clear form
            FetchLibrary(); // Refresh student list
        } catch (error) {
            console.error("Error adding book:", error);
        }
    }
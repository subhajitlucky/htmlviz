export const problems = [
    // EASY PROBLEMS
    {
        id: 1,
        title: "The First Heading",
        difficulty: "Easy",
        category: "Text",
        description: "Create a level-one heading (h1) with the text 'My First Website'.",
        initialCode: "<!-- Write your code here -->",
        validation: { type: "includes", value: ["<h1>", "My First Website", "</h1>"] }
    },
    {
        id: 2,
        title: "Paragraph Power",
        difficulty: "Easy",
        category: "Text",
        description: "Create a paragraph (p) with the text 'HTML is fun!'.",
        initialCode: "",
        validation: { type: "includes", value: ["<p>", "HTML is fun!", "</p>"] }
    },
    {
        id: 3,
        title: "Bold Statement",
        difficulty: "Easy",
        category: "Text",
        description: "Make the word 'Important' bold using the strong tag.",
        initialCode: "<p>This is Important text.</p>",
        validation: { type: "includes", value: ["<strong>Important</strong>"] }
    },
    {
        id: 4,
        title: "Clickable Link",
        difficulty: "Easy",
        category: "Links",
        description: "Create a link to 'https://google.com' with the text 'Search'.",
        initialCode: "",
        validation: { type: "regex", value: /<a\s+href=["']https:\/\/google\.com["']\s*>Search<\/a>/ }
    },
    {
        id: 5,
        title: "Image Insertion",
        difficulty: "Easy",
        category: "Media",
        description: "Insert an image with src 'cat.jpg' and alt text 'A cute cat'.",
        initialCode: "",
        validation: { type: "regex", value: /<img\s+src=["']cat\.jpg["']\s+alt=["']A cute cat["']\s*\/?>/ }
    },
    {
        id: 6,
        title: "Unordered List",
        difficulty: "Easy",
        category: "Lists",
        description: "Create an unordered list (ul) with three items: 'Apple', 'Banana', 'Cherry'.",
        initialCode: "",
        validation: { type: "includes", value: ["<ul>", "<li>Apple</li>", "<li>Banana</li>", "<li>Cherry</li>", "</ul>"] }
    },
    {
        id: 7,
        title: "Input Field",
        difficulty: "Easy",
        category: "Forms",
        description: "Create a text input field with a placeholder 'Enter your name'.",
        initialCode: "",
        validation: { type: "regex", value: /<input\s+type=["']text["']\s+placeholder=["']Enter your name["']\s*\/?>/ }
    },
    {
        id: 8,
        title: "Line Break",
        difficulty: "Easy",
        category: "Text",
        description: "Add a line break (br) between 'Hello' and 'World'.",
        initialCode: "Hello World",
        validation: { type: "regex", value: /Hello\s*<br\s*\/?>\s*World/ }
    },
    {
        id: 9,
        title: "Horizontal Rule",
        difficulty: "Easy",
        category: "Structure",
        description: "Add a horizontal rule (hr) to separate content.",
        initialCode: "",
        validation: { type: "includes", value: ["<hr"] }
    },
    {
        id: 10,
        title: "Button Click",
        difficulty: "Easy",
        category: "Interactive",
        description: "Create a button with the text 'Submit'.",
        initialCode: "",
        validation: { type: "includes", value: ["<button>", "Submit", "</button>"] }
    },

    // MEDIUM PROBLEMS
    {
        id: 11,
        title: "Simple Table",
        difficulty: "Medium",
        category: "Tables",
        description: "Create a table with one row containing two headers: 'Name' and 'Age'.",
        initialCode: "",
        validation: { type: "includes", value: ["<table>", "<tr>", "<th>Name</th>", "<th>Age</th>", "</tr>", "</table>"] }
    },
    {
        id: 12,
        title: "Form Submission",
        difficulty: "Medium",
        category: "Forms",
        description: "Create a form that submits to '/login' using the POST method.",
        initialCode: "",
        validation: { type: "regex", value: /<form\s+action=["']\/login["']\s+method=["']POST["']\s*>/ }
    },
    {
        id: 13,
        title: "Div Container",
        difficulty: "Medium",
        category: "Structure",
        description: "Create a div with the class 'container' containing a paragraph 'Inside div'.",
        initialCode: "",
        validation: { type: "regex", value: /<div\s+class=["']container["']\s*>\s*<p>Inside div<\/p>\s*<\/div>/ }
    },
    {
        id: 14,
        title: "Internal Link",
        difficulty: "Medium",
        category: "Links",
        description: "Create an anchor link that jumps to the element with id 'footer'. Text should be 'Go to Bottom'.",
        initialCode: "",
        validation: { type: "regex", value: /<a\s+href=["']#footer["']\s*>Go to Bottom<\/a>/ }
    },
    {
        id: 15,
        title: "Checkbox Input",
        difficulty: "Medium",
        category: "Forms",
        description: "Create a checkbox input with the id 'agree' and a label 'I agree' associated with it.",
        initialCode: "",
        validation: { type: "regex", value: /<input\s+type=["']checkbox["']\s+id=["']agree["']\s*\/?>\s*<label\s+for=["']agree["']\s*>I agree<\/label>/ }
    },

    // HARD PROBLEMS
    {
        id: 16,
        title: "Complex Table",
        difficulty: "Hard",
        category: "Tables",
        description: "Create a table where the first cell spans 2 columns (colspan). Row 1: 'Header' (spans 2). Row 2: 'A', 'B'.",
        initialCode: "",
        validation: { type: "includes", value: ["colspan=\"2\"", "Header", "<td>A</td>", "<td>B</td>"] }
    },
    {
        id: 17,
        title: "Semantic Layout",
        difficulty: "Hard",
        category: "Structure",
        description: "Structure a page using semantic tags: header, nav, main, footer.",
        initialCode: "",
        validation: { type: "includes", value: ["<header>", "<nav>", "<main>", "<footer>"] }
    },
    {
        id: 18,
        title: "Video Embed",
        difficulty: "Hard",
        category: "Media",
        description: "Embed a video 'movie.mp4' with controls and width 320.",
        initialCode: "",
        validation: { type: "regex", value: /<video\s+.*src=["']movie\.mp4["'].*controls.*width=["']320["'].*>|<video\s+.*width=["']320["'].*controls.*src=["']movie\.mp4["'].*>/ }
    },
    {
        id: 19,
        title: "Select Dropdown",
        difficulty: "Hard",
        category: "Forms",
        description: "Create a dropdown (select) with name 'cars' and options 'Volvo', 'Saab'. 'Volvo' should be selected by default.",
        initialCode: "",
        validation: { type: "includes", value: ["<select name=\"cars\">", "<option value=\"Volvo\" selected>Volvo</option>", "<option value=\"Saab\">Saab</option>"] }
    },
    {
        id: 20,
        title: "Meta Tags",
        difficulty: "Hard",
        category: "Meta",
        description: "Add a meta tag for viewport settings to make the page responsive.",
        initialCode: "<head>\n</head>",
        validation: { type: "regex", value: /<meta\s+name=["']viewport["']\s+content=["']width=device-width,\s*initial-scale=1\.0["']\s*\/?>/ }
    }
];

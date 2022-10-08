
// Task 20: 

// ------   I made a list of programing languages and framework i like the most.    --------

let PL_list = [];

function listCreater(...PL) {
        PL_list.push(PL);
        console.log(PL_list);
}

listCreater( "JavaScript", "three.js", "TypeScript", "React.js", "chakra UI", "material UI");
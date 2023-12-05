var input_data = " ";
function display( value){
    input_data = input_data+value;
    document.caluculator.text_input.value = input_data;
}



let obj = [
        {
            "Subject_Name" :"Maths",
             "Marks":"100"

        },
        {
            "Subject_Name": "English", 
            "Marks" :"60"

        },
        {
            "Subject_Name": "Marathi", 
            "Marks" :"80"

        }
]


    // console.log(obj(2).Marks);
    console.log(obj[1].Marks);
    console.log(obj(0).Marks);
    console.log(obj[2].Marks);
    
 
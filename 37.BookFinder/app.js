let book1 = {
    name: "Her Seyi Dusunme", 
    author: "Anne Bogel",
    price: 25,
    shelf: "1.5.Shelf"
}
let book2 = {
    name: "Sefiller", 
    author: "Victor Hugo",
    price: 45,
    shelf: "2.3.Shelf"
}
let book3 = {
    name: "Seker Portakali", 
    author: "Jose Mauro de Vasconcelos",
    price: 18,
    shelf: "3.4.Shelf"
}
let book4 = {
    name: "Icatlarim", 
    author: "Nikola Tesla",
    price: 34,
    shelf: "4.1.Shelf"
}
let book5 = {
    name: "Gece Yarısı Kütüphanesi", 
    author: "Matt Haig",
    price: 27,
    shelf: "5.3.Shelf"
}

let books = [book1,book2,book3,book4,book5];

let shelf11={code : "1.1.Shelf" , show:false};
let shelf12={code : "1.2.Shelf" , show:false};
let shelf13={code : "1.3.Shelf" , show:false};
let shelf14={code : "1.4.Shelf" , show:false};
let shelf15={code : "1.5.Shelf" , show:false};

let shelf21={code : "2.1.Shelf" , show:false};
let shelf22={code : "2.2.Shelf" , show:false};
let shelf23={code : "2.3.Shelf" , show:false};
let shelf24={code : "2.4.Shelf" , show:false};
let shelf25={code : "2.5.Shelf" , show:false};

let shelf31={code : "3.1.Shelf" , show:false};
let shelf32={code : "3.2.Shelf" , show:false};
let shelf33={code : "3.3.Shelf" , show:false};
let shelf34={code : "3.4.Shelf" , show:false};
let shelf35={code : "3.5.Shelf" , show:false};

let shelf41={code : "4.1.Shelf" , show:false};
let shelf42={code : "4.2.Shelf" , show:false};
let shelf43={code : "4.3.Shelf" , show:false};
let shelf44={code : "4.4.Shelf" , show:false};
let shelf45={code : "4.5.Shelf" , show:false};

let shelf51={code : "5.1.Shelf" , show:false};
let shelf52={code : "5.2.Shelf" , show:false};
let shelf53={code : "5.3.Shelf" , show:false};
let shelf54={code : "5.4.Shelf" , show:false};
let shelf55={code : "5.5.Shelf" , show:false};

let shelfs = 
[
    [shelf51,shelf52,shelf53,shelf54,shelf55],
    [shelf41,shelf42,shelf43,shelf44,shelf45],
    [shelf31,shelf32,shelf33,shelf34,shelf35],
    [shelf21,shelf22,shelf23,shelf24,shelf25],
    [shelf11,shelf12,shelf13,shelf14,shelf15],
];

function createShelfs(){
    console.clear();
    let line = "";
    for(let i = 0 ; i <shelfs.length ; i++){
        for(let j = 0; j < shelfs[i].length ; j++){
            line +="|"+(shelfs[i][j].show ? shelfs[i][j].code : "---");
        }
        console.log(line+"| \n");
        console.log("----------------------")
        line ="";
    }
}

function findCode(bookName){
    let shelfCode = null;
    books.forEach(function(book){
        if(book.name.toUpperCase().includes(bookName.toUpperCase(),0)){
            shelfCode = book.shelf;
        }
    });
    return shelfCode;
}

function showOnShelf(shelfCodeParameter){
    for(let i = 0 ; i < shelfs.length; i++){
        for(let j = 0 ; j < 5; j++ ){
            if(shelfs[i][j].code == shelfCodeParameter){
                shelfs[i][j].show = true;
                break;
            }
        }
    }
}

createShelfs();

let userBookName = prompt("Enter a book name to search.");
let shelfCode = findCode(userBookName);

if(shelfCode != null){
    showOnShelf(shelfCode);
    createShelfs();
}else{
    alert("The book you provided is not available in our Library.");
}
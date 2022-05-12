let elFilmsList = $(".js-kinolar-list");

let creatFilmsItem = function (i){
  let elNewLi = createElement("li", "card w-25 text-center m-3 p-3");
let elNewHeading = createElement("h5","card-title",kinolar[i].title);
let elNewSubHeading = createElement("h6","card-subtitle mb-2 text-muted",kinolar[i].year);

let elNewTextFirst = createElement("p","card-text",kinolar[i].cast);
let elNewTextSecond = createElement("p","card-text",kinolar[i].genres);

elNewLi.append(elNewHeading,elNewSubHeading,elNewTextFirst,elNewTextSecond);

elFilmsList.append(elNewLi);
}

for (let i = 0;i <kinolar.length; i++){
  kinolar.splice(100);
  creatFilmsItem(i);
}

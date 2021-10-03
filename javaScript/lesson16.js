

const userInfoOutput = document.getElementById('main');

const user ={
    vardas: "Vaidas",
    pavarde: "Sauklys",
}
userInfoOutput.innerHTML = `<h2> User information </h2>
<p> Vartotojo vardas yra ${user.vardas} , o pavarde ${user.pavarde}. </p>`;
   

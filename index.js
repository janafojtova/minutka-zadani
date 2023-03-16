console.log('funguju!');
/*
Minutka
to dáš
Naklonujte si repozitář pro stránku s kuchyňskou minutkou. Využijte funkci setTimeout ke splnění následujících
 úkolů.

Zařiďte, aby minutka začala zvonit za pět vteřin po otevření stránky. Zvonění zařídíte tak, že k elementu budíku 
přídáte CSS třídu alarm--ring.
Nechte uživatele skrze prompt zadat kolik vteřin má uplynout než minutka začne zvonit.
Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat audio element a zavolat na něm metodu play. Abyste zvuk 
slyšeli, musíte po zadání času na stránku kliknout. Prohlížeč Chrome totiž brání stránkam přehrávat audio či video
 dokud uživatel se stránkou nějak neinteragoval.
Přidejte na stránku tlačítko, které umožní odpočet minutky zrušit dřív, než začne zvonit.
*/
const pocetVterinOdUzivatele = prompt("Zadejte počet vteřin");

const zacniZvonit = ()=>{
    const budik = document.querySelector(".alarm");
    budik.classList.add("alarm--ring")  
}

const audio =document.querySelector(".audio")
const spustAudio =()=>{
    audio.play()
}
const zastavAudio =()=>{
    audio.pause()
}
const resetujAudio =()=>{
    audio.currentTime=0
}
setTimeout(spustAudio,Number(pocetVterinOdUzivatele)*1000);
   
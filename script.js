const advice = document.querySelector(".Advice");
const adviceNo = document.querySelector(".AdviceNo");
const button = document.querySelector(".circle");


fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    advice.innerText = "\""+data.slip.advice+"\"";
    adviceNo.innerText = "ADVICE # "+data.slip.id;
      button.addEventListener("click",refresh);

function refresh() {
    location.reload();
    adviceNo.innerText = "ADVICE # "+data.slip.id;
    advice.innerText = "\""+data.slip.advice+"\"";
}
  })
  .catch(error => {
    console.error('Error:', error);
  });
 

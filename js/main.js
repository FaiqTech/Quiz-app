const data = [
  {
    id: 1,
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct: 1,
    score: 10,
  },
  {
    id: 2,
    question: "Question 2",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"],
    correct: 3,
    score: 20,
  },
  {
    id: 3,
    question: "Question 3",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct: 2,
    score: 30,
  },
  {
    id: 4,
    question: "Question 4",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct: 0,
    score: 40,
  },
  {
    id: 5,
    question: "Question 5",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct: 3,
    score: 50,
  },
];

const container = document.querySelector("#container");
const button = document.querySelector("button");

let innerHTML = "";

data.forEach((item) => {
  let answers = "";
  item.answers.forEach((answer, index) => {
    answers += `<div class="form-check">
                            <input class="form-check-input" type="radio" name="test-${
                              item.id
                            }-answer" id="test-${item.id}-answer-${index + 1}">
                            <label class="form-check-label" for="test-${
                              item.id
                            }-answer-${index + 1}">
                                ${answer}
                            </label>
                        </div>`;
  });

  innerHTML += ` <div class="col-12 col-md-4">
                <div class="card mt-3">
                    <div class="card-header">
                        <div class="card-title">${item.question}</div>
                    </div>
                    <div class="card-body">
                        ${answers}
                    </div>
                </div>
            </div>`;
});

container.innerHTML = innerHTML;

let score = 0;

button.addEventListener("click", () => {
  data.forEach((item) => {
    item.answers.forEach((answer, index) => {
      const localAnswer = document.querySelector(
        `#test-${item.id}-answer-${index + 1}`
      );
      const isChecked = localAnswer.checked;
      if (isChecked && item.correct === index) {
        score += item.score;
      } else if (isChecked) {
        localAnswer.classList.add("is-invalid");
        document
          .querySelector(`#test-${item.id}-answer-${item.correct + 1}`)
          .classList.add("is-valid");
      }
    });
  });
});

//*Ev tapsirigi
// Quiz app yazmaq
// Atdigim numuneden ferqli olaraq
// Testler ekranda bir-bir eks olunmalidir
// Cavab secildikden sonra next buttonu click edilmelidir,cavab secilmeyibse next buttonu disabled olmalidir
// 10 Sual olmalidir
// Her sual ucun 30 saniye vaxt limiti
// Yeni suala kecdikde vaxt yeniden 30a qalxmalidir
// Vaxt 10 saniyenin asagisina dusubse qirimizi rengde gorunmelidir
// Vaxtin formati 00:30 - 00:29 kimi eks olunmalidir
// Next duymesini vurduqda sual duzdurse istifadecinin balinin uzerine hemin sualin balini gelmek ve ekranda gostermek
// eger yalnisdirsa dogru cavabi yasil ile gostermek ve ikinci defe next duymesin vurduqda diger suala aparmaq
// Eger vaxt bitibse ve hec bir cavab secilmeyibse suala cavab vermediniz notification cixarmaq ve diger suala avtomatik kecmek

class student {
  constructor(firstNAme, lastName){
    this.firstNAme = firstNAme;
    this.lastName = lastName;
  }

  greetStudent(){
    console.log(`Greetings ${this.firstNAme}`);
    console.log(`Your last name is: ${this.lastName}`)
  }
}

const student1 = new student("Adrian", "Brandshaug");
const student2 = new student("Adrian", "Brandshaug");

student1.greetStudent();
//student2.greetStudent();
//chapter 38-44

//task01

//function ab(){
//	var a= prompt('enter the base.');
//	var b= prompt('enter the power.');
//	var result= Math.pow(a,b);
   
//	alert (`the result is:${result}`);
//}

//task2

//function isLeapYear(){ 
//	var year= document.getElementById("year").value; 
	  
//	document.getElementById("GFG").innerHTML  
//		= (year % 100 === 0) ? (year % 400 === 0) 
//							 : (year % 4 === 0); 
//} 


//task4

//#include <stdio.h>
//void calc(int i, int j, int k, int full, float *ave, float *perce)
//{
 //*ave = (i + j + k) / 3.0;
 //*perce = (*ave / full)*100.0;
//}

///int  main( )
//{
 //int a, b, c, full;
 //float av, perc;
 //printf("Enter the marks received by the student in 3 subjects and the total possible marks for 1 paper:");
 //scanf("%d,%d,%d,%d", &a, &b, &c, &full);
 //calc(a, b, c, full, &av, &perc);
 //printf("\nThe average marks is %f.\nThe percentage is %f\n", av, perc);
 //return 0;
//}


//task5

//function myFunction() {
//	var str = "Hello world, welcome to the universe.";
//	var n = str.indexOf("e");
//	document.getElementById("demo").innerHTML = n;
  //}

//task6

// Java program to remove vowels from a String 


//class GFG 
//{	 
//	static String remVowel(String str) 
	{ 
//		return str.replaceAll("[aeiouAEIOU]", ""); 
//	} 
	
	
//	public static void main(String[] args) 
	{ 
//		String str = "GeeeksforGeeks - A Computer Science Portal for Geeks";		 
//		System.out.println(remVowel(str)); 
//	} 
//} 

//task 7

//function findOccurrences() {
//	var str = "Pleases read this application and give me gratuity";
//	var count = 0;
//	let haveSeenVowel = false;
  
//	for (const letter of str.toLowerCase()) {
//	  switch (letter) {
//		case 'a':
//		case 'e':
//		case 'i':
//		case 'o':
//		case 'u':
//		  {
//			if (haveSeenVowel) {
//			  count++;
//			  haveSeenVowel = false;
//			} else {
//			  haveSeenVowel = true;
//			}
//			break;
//		  }
//		default:
//		  haveSeenVowel = false
//	  }
//	}
  
//	return count
  
//  console.log(findOccurrences());
  
// task 8
//#include<stdio.h>
//int main()
//{
//int a,b,c,d,f;

//printf ("Enter the distance (in km): ");
//scanf ("%d",&a);

//b = a * 1000;
//c = b * 3.28;
//d = c * 12;
//f = d * 30;

//printf ("\nDistance in meters = %d m",b);
//printf ("\nDistance in feets = %d feet",c);
//printf ("\nDistance in inches = %d inches",d);
//printf ("\nDistance in centimeters= %d cm",f);

//printf ("\n\npress any key to close.");

//getch ();
//return 0;
//}

//task9
//#include<stdio.h>
//#include<conio.h>
//int main()
//{
  //  int count = 1, working_hours, over_time;
    //float over_time_pay;

    //while(count<=10)
    //{
      //  printf("Enter the working hours of employee no %d: ", count);
        //scanf("%d", &working_hours);
        //if(working_hours>40)
        //{
          //  over_time = working_hours - 40;
            //over_time_pay = over_time * 12.00;
            //printf("Employee No %d overtime pay is %.2f\n", count, over_time_pay);
        //}
        //else
          //  printf("You have to work for more than 40 hours to get over time pay\n");

        //count++;
   // }
//}

//task10
int main()
{
	int amount;
	printf("Please input amount for withdraw : ");
	scanf("%d",&amount);

	//calculations
	printf("\n\nRequired notes of Rs. 100  :  %d", amount / 100);
	printf("\n\nRequired notes of Rs. 50   :  %d", (amount % 100) / 50);
	printf("\n\nRequired notes of Rs. 10   :  %d", (((amount % 100) % 50) / 10));
	printf("\n\nAmount still remaining Rs. :  %d", (((amount % 100) % 50) % 10));
	return 0;
}



//chapter 44-48
 
//task1

//var el_up = document.getElementById("GFG_UP"); 
              
//el_up.innerHTML =  
//	"Click on the LINK for further confirmation.";



//task2

//(code on HTML)


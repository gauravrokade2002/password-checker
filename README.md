# PRODIGY_CS_03
PASSWORD STRENGTH CHECKER
#gauravrokade

A password checker is a tool or system designed to assess the strength and security of a password. It helps users determine if their chosen password meets certain security criteria and guidelines, which can include:

Length: Ensures the password is of a minimum length (e.g., at least 8 characters).
Complexity: Checks for a mix of uppercase and lowercase letters, numbers, and special characters.
Repetition: Identifies and flags repeated characters or sequences.
Predictability: Detects common or predictable patterns, such as sequential characters (e.g., "123" or "abcd").
Forbidden Patterns: Flags passwords that use easily guessable patterns or sequences.
Key Features of a Password Checker
Strength Evaluation: Provides feedback on how strong the password is based on the criteria mentioned.
Real-Time Feedback: Offers immediate updates as the user types the password.
Visual Indicators: Displays visual cues like progress bars or color-coded strength indicators to show password strength.
Guidelines and Suggestions: May provide suggestions for creating stronger passwords if the entered password is weak.
Example Use Case
When a user enters a password into a form, the password checker analyzes it based on predefined rules. For example, it might check:

If the password has at least 12 characters.
If it includes both uppercase and lowercase letters.
If it contains at least one number and one special character.
If it avoids common patterns or repeated sequences.
If the password meets all criteria, it might be classified as "Strong" or "Very Strong." If not, the tool might indicate that the password is "Weak" or "Fair" and suggest improvements.


The tool is created in the html with using JavaScript and CSS language 

HTML: The structure includes a password input field, feedback elements to indicate criteria fulfillment, and a strength bar.

CSS: Styles ensure the tool is visually appealing. Feedback items turn green when a criterion is met. The strength bar fills with color according to the strength of the password.

JavaScript: The script checks the password against different criteria, updates the feedback, and adjusts the strength bar accordingly. 




Run the Code
To run the code:

1.Ensure all three files (file1.html, file2.css, and file3.js) are in the same directory.

2.Open file1.html in your web browser for access the tool

3.In the html file code there are link lines where we have to link the css and js code files

4.To change html code
	You can do this by right-clicking the file1.html file and selecting "Open with" followed by your preferred web browser.
	Alternatively, you can drag and drop the file1.html file into an open browser window.


Explanation:


No Repeated Characters:

const noRepeats = !/(.)\1/.test(password);
Checks for any character repeated twice.
No Triple Repeated Characters:

const noTripleRepeats = !/(.)\1\1/.test(password);
Checks for any character repeated three times consecutively.
No Sequential Characters:

const noSequentialChars = !/(012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|wxy|xyz)/.test(password);
Ensures the password does not contain common sequences of numbers or letters.
No Forbidden Patterns:

const noForbiddenPatterns = !(/(\d)\1{2,}|([a-zA-Z])\2{2,}|(?:012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|wxy|xyz)/.test(password));
Combines checks for forbidden patterns, including repeated digits or characters and common sequential patterns.





STEP TO RUN THIS TOOL 

1. The source code provided with a html css and js code
2. Separate code with three file 
3. link css and js file to the html code 
4. run the html code
5. check password is fair or very strong or what else

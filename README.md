
To run the code please follow below steps

npm run test
npm run allure:generate
npm run allure:open

execute whole suite
 npx codeceptjs run tests/addUser_test.js --steps

parellel execution:
 npx codeceptjs run-multiple parallel --steps

Standard execution of all or selected tests:
npx codeceptjs run --grep "Login"


dry run 
npx codeceptjs dry-run --grep "Admin"

clean output dir
Remove-Item -Recurse -Force .\output\

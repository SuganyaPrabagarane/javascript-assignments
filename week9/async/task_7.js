/* 
Task 7: Fetch User Data (Async/Await)  
---------------------------------------
Convert `fetchUserDataAsync(shouldFail)` to use `async/await`  
If `shouldFail === false`, wait **2 sec** and return `"User data loaded"`  
If `shouldFail === true`, wait **2 sec** and throw `"Failed to fetch data"`  
*/

async function fetchUserDataAsync(shouldFail) {
    if (shouldFail) {
        return await new Promise((resolve, reject) => {
            setTimeout(() => reject("Failed to fetch data"), 2000);
        });
    }

    return await new Promise((resolve, reject) => {
        setTimeout(() => resolve("User data loaded"), 2000);
    });
}
// Test Cases
fetchUserDataAsync(false).then(console.log).catch(console.error);
// Expected: "User data loaded" (after 2 sec)
fetchUserDataAsync(true).then(console.log).catch(console.error);
// Expected: "Failed to fetch data" (after 2 sec)
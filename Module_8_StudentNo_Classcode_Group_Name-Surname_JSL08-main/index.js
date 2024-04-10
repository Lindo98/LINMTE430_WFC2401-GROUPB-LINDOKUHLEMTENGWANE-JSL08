
let bankBranchInstance = null;   // this is set to null to indicate that no instance exist at this point

class bankBranch {
    constructor(branchInfo) {    //I have created a class of BankBranch with BankInfo as a parameter
        if (!bankBranchInstance) {   //this constructor is to check if the bankBranchInstent is null/non-existant, it true then it will create a new instance 
            bankBranchInstance = this;   // the new instance will be created with the provided branchInfo and assign it to bankBranchInstance
            this.branchInfo = branchInfo;
        }
        return bankBranchInstance;
    }
    getBranchInfo() {
        return this.branchInfo;  //this then retrieves the branch info
    }
}

// On the below code, I have created 2 instances of the bankBranch class with different information
// I have used the getBranchInfo method to retrieve their information and to verify if both instances refer to the same singleton by comparing them with '==='


const branchA = new bankBranch({ name: "Branch A", location: "387 Small Street" });

const branchB = new bankBranch({ name: "Branch B", location: "552 Long Street" });

console.log(branchA.getBranchInfo());
console.log(branchB.getBranchInfo());

console.log(branchA === branchB);
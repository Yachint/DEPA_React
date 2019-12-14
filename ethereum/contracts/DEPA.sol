pragma solidity ^0.4.17;

contract AccountManager{
     struct History{
        uint reqIndex;
        address requester;
        address requestee;
        uint tdate;
        string typeofDoc;
        uint feePaid;
        uint tgranted;
        string tUnit;
        string action;
    }
    History[] public ledger;
    address[] public deployedAccounts;
    mapping(address=>address) logInDetails;
    
    function createAccount(string fn, string ln) public{
        address newAccount = new DocumentContract(fn,ln,msg.sender,this);
        logInDetails[msg.sender] = newAccount;
        deployedAccounts.push(newAccount);
    }
    
    function getDeployedAccounts() public view returns (address[]) {
        return deployedAccounts;
    }
    function getLedgerLength() public view returns (uint) {
        return ledger.length;
    }
    function addToLedger(uint index,address req, address reqq, uint tdate, string typeofDoc, uint feeP, uint tgranted, string tUnit, string ac) public {
        History memory entry = History({
            reqIndex : index,
            requester: req,
            requestee: reqq,
            tdate: tdate,
            typeofDoc: typeofDoc,
            feePaid: feeP,
            tgranted: tgranted,
            tUnit: tUnit,
            action: ac
        });
        
        ledger.push(entry);
        
    }
    
    function getMyAccount(address sender) public view returns (address){
        return logInDetails[sender];
    }
    
}

contract DocumentContract{
    
    struct Document {
        string typeofDoc;
        bool expiry;
        string dataHash;
        uint fee;
        uint dateAdded;
        mapping(address=>uint) timeGiven;
    }
    
    struct Request{
        address requester;
        address requestee;
        uint docIndex;
        bool granted;
        uint timeAfter;
        string dateType;
    }
    struct History{
        uint reqIndex;
        address requester;
        address requestee;
        uint tdate;
        string typeofDoc;
        uint feePaid;
        uint tgranted;
        string tUnit;
        string action;
    }
    
   
    
    
    Document[] private documents;
    Request[] public requests;  
          ///Contract Id
    address public owner;
    string public firstName;
    string public lastName;
    address public manager;
    
    
    
    
    function DocumentContract(string fn, string ln, address creator, address managerAdd) public {
        owner = creator;
        firstName = fn;
        lastName = ln;
        manager = managerAdd;
    }
    
    
    function getRequestsLength() public view returns (uint) {
        return requests.length;
    }
    
    function getDocumentsLength() public view returns (uint) {
        return documents.length;
    }
    
    
    function submitDocument(bool exp, string utype, uint minFee, string hash) public{
        Document memory doc = Document({
            typeofDoc : utype,
            expiry : exp,
            dateAdded: now,
            dataHash :  hash,
            fee : minFee
            
        });
        
        documents.push(doc);
    }
    
    function getDocument(uint docIndex) public view returns(string, bool,uint,uint){
        Document storage doc = documents[docIndex];
        return (doc.typeofDoc, doc.expiry, doc.fee, doc.dateAdded);
    }
    
    function getHash(uint docIndex) public view returns(string){
        require(msg.sender==owner);
        Document storage doc = documents[docIndex];
        return doc.dataHash;
    }
    
    function requestPermission(uint docIndex, string dType, uint dAfter ) public payable{
        
        Document storage doc = documents[docIndex];
        require(msg.value>=doc.fee);
        
            Request memory req = Request({
                requester: msg.sender,
                requestee: owner,
                docIndex: docIndex,
                dateType: dType,
                timeAfter: dAfter,
                granted: false
            });
            
        
        AccountManager acc = AccountManager(manager);
        //manager.call(bytes4(keccak256("addToLedger(address, address, uint, string, uint, uint, string, string)")));
        acc.addToLedger(requests.length,req.requester,req.requestee,now,doc.typeofDoc,doc.fee,req.timeAfter,req.dateType,"PENDING");
        requests.push(req);
    }
    
    function grantPermission(uint index) public {
        require(msg.sender==owner);
        Request storage req = requests[index];
        Document storage doc = documents[req.docIndex];
        
        if(req.granted == false){
            if(keccak256(req.dateType) == keccak256('seconds')){
                doc.timeGiven[req.requester] = now + req.timeAfter * 1 seconds;
                req.granted = true;
            }
            else if(keccak256(req.dateType) == keccak256('minutes')){
                doc.timeGiven[req.requester] = now + req.timeAfter * 1 minutes;
                req.granted = true;
            }
            else if(keccak256(req.dateType) == keccak256('hours')){
                doc.timeGiven[req.requester] = now + req.timeAfter * 1 hours;
                req.granted = true;
            }
            else if(keccak256(req.dateType) == keccak256('days')){
                doc.timeGiven[req.requester] = now + req.timeAfter * 1 days;
                req.granted = true;
            }
        }else{
             
        }
        
        // History memory entry = History({
        //     requester: req.requester,
        //     requestee: req.requestee,
        //     tdate: now,
        //     typeofDoc: doc.typeofDoc,
        //     feePaid: doc.fee,
        //     tgranted: req.timeAfter,
        //     tUnit: req.dateType,
        //     action: "ACCEPTED"
        // });
        
        // ledger.push(entry);
        AccountManager acc = AccountManager(manager);
        //manager.call(bytes4(keccak256("addToLedger(address, address, uint, string, uint, uint, string, string)")));
        acc.addToLedger(index,req.requester,req.requestee,now,doc.typeofDoc,doc.fee,req.timeAfter,req.dateType,"ACCEPTED");
    }
    

    function rejectRequest(uint index) public {
        
        require(msg.sender==owner);
        Request storage req = requests[index];
        Document storage doc = documents[req.docIndex];
        
        req.requester.transfer(doc.fee);
        
        
        // History memory entry = History({
        //     requester: req.requester,
        //     requestee: req.requestee,
        //     tdate: now,
        //     typeofDoc: doc.typeofDoc,
        //     feePaid: doc.fee,
        //     tgranted: req.timeAfter,
        //     tUnit: req.dateType,
        //     action: "REJECTED"
        // });
        
        // ledger.push(entry);
        
        AccountManager acc = AccountManager(manager);
        //manager.call(bytes4(keccak256("addToLedger(address, address, uint, string, uint, uint, string, string)")));
        acc.addToLedger(index,req.requester,req.requestee,now,doc.typeofDoc,doc.fee,req.timeAfter,req.dateType,"REJECTED");
    }
    
    
    function AccessDocument(uint docIndex) public view returns (string) {
        //Follow flow
        Document storage doc = documents[docIndex];
        
        if(doc.expiry == true){
            require(doc.timeGiven[msg.sender]!=0 && doc.timeGiven[msg.sender] >= now);
            return doc.dataHash;
            
        }
        else{
            require(doc.timeGiven[msg.sender]>0);
            return doc.dataHash;
        }
        
    }

}



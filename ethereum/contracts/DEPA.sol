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
    
    struct Actions {
        string action;
        address fromAdd;
        address ToAdd;
        uint feePaid;
        uint tstamp;
    }
    Actions[] public actions;
    History[] public ledger;
    address[] public deployedAccounts;
    mapping(address=>address) logInDetails;
    
    address[] public deployedThirdParty;
    mapping(address=>address) accThirdParty;
    
    function createAccount(string fn, string ln) public{
        address newAccount = new DocumentContract(fn,ln,msg.sender,this);
        logInDetails[msg.sender] = newAccount;
        deployedAccounts.push(newAccount);
        registerAction("ACCOUNT CREATION",msg.sender,this,0,now);
    }
    
    function registerAction(string ac, address fadd, address tadd, uint fee, uint tsp) public {
        Actions memory ac1 = Actions({
           action: ac,
           fromAdd: fadd,
           ToAdd: tadd,
           feePaid: fee,
           tstamp: tsp
        }); 
        
        actions.push(ac1);
    }
    
    function registerThirdParty(string ogName, string desc) public{
        address newAccount = new ThirdParty(ogName,msg.sender,this,desc);
        deployedThirdParty.push(newAccount);
        accThirdParty[msg.sender] = newAccount;
        registerAction("ORGANISATION REGISTERED",msg.sender,this,0,now);
    }
    
    function getContractAddress(address tp) public view returns (address){
        return accThirdParty[tp];
    }
    
    function getDeployedAccounts() public view returns (address[]) {
        return deployedAccounts;
    }
    function getThirdPartyList() public view returns (address[]) {
        return deployedThirdParty;
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
    
    function getActionsLength() public view returns (uint) {
        return actions.length;
    }
    function deactivateAccount(address conAdd) public{
        logInDetails[conAdd] = 0x0000000000000000000000000000000000000000;
    }
}


contract ThirdParty {
    
    struct Request{
        address contractAdd;
        address requestee;
        uint docIndex;
        uint timeAfter;
        string dateType;
        string status;
    }
    
    mapping(address=>Request[]) record;
    Request[] public Irequests; 
    address public owner;
    string public orgName;
    address public manager;
    string public description;
    address[] public conn;
    
    
    function ThirdParty(string orgN, address creatorN, address managerAdd, string descriptionN) public {
        orgName = orgN;
        owner = creatorN;
        manager = managerAdd;
        description = descriptionN;
        
    }
    
    function getRequestsLength(address contractAdd) public view returns (uint) {
        Request[] storage requests = record[contractAdd];
        return requests.length;
    }
    
    function updateStatus(uint index, string status_new,address contractAdd) public {
        Request[] storage requests = record[contractAdd];
        Request storage req = requests[index];
        req.status = status_new;
        AccountManager ac = AccountManager(manager);
        ac.registerAction("UPDATED STATUS",msg.sender,this,0,now);
    }
    
    function addRequest(address reqee, uint docI, uint taft, string dtype, string stat, address contractAdd) public{
        
        Request[] storage requests = record[contractAdd];
        
        Request memory req = Request({
                requestee: reqee,
                docIndex: docI,
                dateType: dtype,
                timeAfter: taft,
                status: stat,
                contractAdd : contractAdd
        });
        
        requests.push(req);
        conn.push(contractAdd);
    }
    
    function getConnArray() public view returns (address[]){
        return conn;
    }
    
    function getArrayLength(address contractAdd) public view returns(uint){
        Request[] storage requests = record[contractAdd];
        return requests.length;
    }
    function setRequestArray(address contractAdd) public{
        Request[] storage requests = record[contractAdd];
        Irequests = requests;
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
        uint tpIndex;
        address requestee;
        uint docIndex;
        bool granted;
        uint timeAfter;
        string dateType;
        bool valid;
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
        AccountManager ac = AccountManager(manager);
        ac.registerAction("DOCUMENT ADDED",msg.sender,this,0,now);
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
        AccountManager acc = AccountManager(manager);
        address tpContract = acc.getContractAddress(msg.sender);
        ThirdParty tp = ThirdParty(tpContract);
        uint currTpIndex = tp.getRequestsLength(this);
        Document storage doc = documents[docIndex];
        require(msg.value>=doc.fee);
        
            Request memory req = Request({
                requester: msg.sender,
                requestee: owner,
                tpIndex: currTpIndex,
                docIndex: docIndex,
                dateType: dType,
                timeAfter: dAfter,
                granted: false,
                valid : true
            });
            
        
        
        //manager.call(bytes4(keccak256("addToLedger(address, address, uint, string, uint, uint, string, string)")));
        acc.addToLedger(requests.length,req.requester,req.requestee,now,doc.typeofDoc,doc.fee,req.timeAfter,req.dateType,"PENDING");
        
        tp.addRequest(owner, docIndex, dAfter, dType, "PENDING",this);
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
                req.valid = false;
            }
            else if(keccak256(req.dateType) == keccak256('minutes')){
                doc.timeGiven[req.requester] = now + req.timeAfter * 1 minutes;
                req.granted = true;
                req.valid = false;
            }
            else if(keccak256(req.dateType) == keccak256('hours')){
                doc.timeGiven[req.requester] = now + req.timeAfter * 1 hours;
                req.granted = true;
                req.valid = false;
            }
            else if(keccak256(req.dateType) == keccak256('days')){
                doc.timeGiven[req.requester] = now + req.timeAfter * 1 days;
                req.granted = true;
                req.valid = false;
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
        address tpContract = acc.getContractAddress(req.requester);
        ThirdParty tp = ThirdParty(tpContract);
        tp.updateStatus(req.tpIndex, "ACCEPTED",this);
    }
    

    function rejectRequest(uint index) public {
        
        require(msg.sender==owner);
        Request storage req = requests[index];
        Document storage doc = documents[req.docIndex];
        req.valid = false;
        req.granted = false;
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
        address tpContract = acc.getContractAddress(req.requester);
        ThirdParty tp = ThirdParty(tpContract);
        tp.updateStatus(req.tpIndex, "REJECTED",this);
    }
    
    function markAccessed() public {
        AccountManager acc = AccountManager(manager);
        acc.registerAction("DOCUMENT ACCESSED",msg.sender,this,0,now);
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



pragma solidity ^0.4.17;

contract AccountManager{
    address[] public deployedAccounts;
    
    function createAccount(string fn, string ln) public{
        address newAccount = new DocumentContract(fn,ln,msg.sender);
        deployedAccounts.push(newAccount);
    }
    
    function getDeployedAccounts() public view returns (address[]) {
        return deployedAccounts;
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
        uint docIndex;
        bool granted;
        uint timeAfter;
        string dateType;
    }
    
    struct History{
        address requester;
        uint tdate;
        string typeofDoc;
        uint feePaid;
        uint tgranted;
        string tUnit;
        string action;
    }
    
    History[] public ledger;
    Document[] private documents;
    Request[] public requests;  
          ///Contract Id
    address public owner;
    string public firstName;
    string public lastName;
    
    
    
    
    function DocumentContract(string fn, string ln, address creator) public {
        owner = creator;
        firstName = fn;
        lastName = ln;
    }
    
    function getLedgerLength() public view returns (uint) {
        return ledger.length;
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
    
    function requestPermission(uint docIndex, string dType, uint dAfter ) public payable{
        
        Document storage doc = documents[docIndex];
        require(msg.value>=doc.fee);
        
            Request memory req = Request({
                requester: msg.sender,
                docIndex: docIndex,
                dateType: dType,
                timeAfter: dAfter,
                granted: false
            });
            
        
        History memory entry = History({
            requester: req.requester,
            tdate: now,
            typeofDoc: doc.typeofDoc,
            feePaid: doc.fee,
            tgranted: req.timeAfter,
            tUnit: req.dateType,
            action: "PENDING"
        });
        
        ledger.push(entry);
            
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
        
        History memory entry = History({
            requester: req.requester,
            tdate: now,
            typeofDoc: doc.typeofDoc,
            feePaid: doc.fee,
            tgranted: req.timeAfter,
            tUnit: req.dateType,
            action: "ACCEPTED"
        });
        
        ledger.push(entry);
    }
    

    function rejectRequest(uint index) public {
        
        require(msg.sender==owner);
        Request storage req = requests[index];
        Document storage doc = documents[req.docIndex];
        
        req.requester.transfer(doc.fee);
        
        
        History memory entry = History({
            requester: req.requester,
            tdate: now,
            typeofDoc: doc.typeofDoc,
            feePaid: doc.fee,
            tgranted: req.timeAfter,
            tUnit: req.dateType,
            action: "REJECTED"
        });
        
        ledger.push(entry);
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



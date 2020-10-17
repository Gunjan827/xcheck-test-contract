
// SPDX-License-Identifier: MIT\
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.21 <0.8.0; 

contract MyNews{
    
    string Date;
    function setDate( string memory _Date) public{
       Date = _Date;
    } 
    
    function getDate() public view returns(string memory){
         return(Date);
     }
    
    bytes32 newsTitle;
    bool newsUndertaking;
    uint256 proofOfExistence;
    string newsCategory;
    
    
    function setData ( string memory _newsTitle,string memory _newsCategory, bool _newsUndertaking ) public  {
        bytes32 _TitleLocal = keccak256(bytes(_newsTitle));
        newsTitle = _TitleLocal;
        newsCategory = _newsCategory;
        newsUndertaking = _newsUndertaking;
        proofOfExistence = block.timestamp;
    }
    
    function getData() public view returns(bytes32,string memory, bool, uint256){
        return (newsTitle,newsCategory, newsUndertaking, proofOfExistence);
    }
}

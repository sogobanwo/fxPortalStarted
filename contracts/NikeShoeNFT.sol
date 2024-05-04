// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.18;
 
import "./ERC721A.sol";

contract NikeShoeNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("NikeShoe", "NS") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmWCmy2wD4hPTkxWrPCvF61if9VVKCtPuwVZ6gVYR48j3r/";
    }

    function promptDescription() external pure returns (string memory) {
        return "Nike Shoes: generate different popular Nike shoes";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}
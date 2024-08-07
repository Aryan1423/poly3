
# Circuit

This program, which is a Module 3 Project, shows the fundamental syntax of Typescript and the Circom programming language. The goal of the hardhat-circom project is to create solidity verifiers, proofs, and zero-knowledge circuits.

## Description

This program is a straightforward piece of code written in the circuit-making computer language Circom.The goal of this endeavour is to:

1. Construct the right circuit.circom deployment
2. Assemble the circuit to produce circuit bridges.
3. Create a proof using the inputs A=0 and B=1.
   ![Table](https://authoring.metacrafters.io/assets/cms/Assessment_b05f6ed658.png?updated_at=2023-02-24T00:00:37.278Z)
5. Set up the Sepolia Testnet with a solidity verifier.
6. Use the verifier contract's verifyProof() function and confirm that the output is true.

This application may be used as a springboard for more difficult projects in the future and provides a clear and basic introduction to Circom programming.

# Getting Started

## Quick Start

Compile the CustomCircuit() circuit and verify it against a smart contract verifier

```
pragma circom 2.0.0;

template AND() {
    signal input a;
    signal input b;
    signal output out;

    out <== a*b;
}

template NOT() {
    signal input in;
    signal output out;

    out <== 1 + in - 2*in;
}

template OR() {
    signal input a;
    signal input b;
    signal output out;

    out <== a + b - a*b;
}

template CustomCircuit () {  
    signal input a;
    signal input b;

    signal x;
    signal y;

    signal output q;

    component andGate = AND();
    component notGate = NOT();
    component orGate = OR();

    andGate.a <== a;
    andGate.b <== b;
    x <== andGate.out;

    //logic of NOT gate
    notGate.in <== b;
    y <== notGate.out;

    orGate.a <== x;
    orGate.b <== y;
    q <== orGate.out;
}

component main = CustomCircuit();
```

## To run the project you can use this steps:

The following actions should be taken in order to manage the project:

 1.Install the Metamask wallet on your browser first.

2. You need to add the sepolia test network in Metamask. To add this, navigate to the chainlist website (https://chainlist.org/?testnets=true), click the "Use Metamask" button, and confirm that the "Include Testnets" checkbox is enabled in the pop-up window that appears. Next, use the 'Search Networks' input field to look up the 11155111 chain ID. After adding the network to Metamask, click the 'Approve' button in the Metacrafters pop-up window. We have incorporated the Network to our metamask wallet.

3. on order to operate the project, we now require testnet tokens on the network. To obtain the testnet tokens for Sepolia in the network, visit https://cloud.google.com/application/web3/faucet/ethereum/sepolia.

4. Clone the Github repository on your Github account, making sure all of the files are there.

5. Launch Gitpod by clicking on New Workspace, pasting the repository link, and clicking "continue." The workspace will launch on the VS-CODE desktop or browser.

9. Type `npm i` in the terminal while in the project directory, then wait for it to finish. If you use gitpod, this step is not required because gitpod installs all dependencies immediately when it opens.

10. Execute {npx hardhat circom}. This will produce the **MultiplierVerifier.sol** contract and the **out** file with circuit intermediaries.
11. Execute the script `npx hardhat run scripts/deploy.ts`. This script does four tasks.  
   - Uses `generateProof()} to create a proof from circuit intermediaries -Uses `generateCallData()} to create calldata -Deploys the `MultiplierVerifier.sol} contract
   - Uses calldata to invoke `verifyProof()} on the verifier contract.
11. Copy the address that says "Verifier deployed to" from the terminal and search it on the https://sepolia.etherscan.io/ testnet explorer. If you notice the Transaction of Contract Creation, it indicates that our script is operating well.
12. The project is properly finished if the terminal displays the Verifier result as true.
 









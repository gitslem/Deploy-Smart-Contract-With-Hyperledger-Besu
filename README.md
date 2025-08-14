Overview

This repository contains the implementation and demonstration of a blockchain-based project completed as part of an academic assignment. The work covers the following key areas:
	•	Part 1: Deployment of a smart contract using Hyperledger Besu (Ethereum-compatible enterprise blockchain platform).
	•	Part 2: Demonstration of a new Hyperledger product, with practical example.


Part 1: Smart Contract Deployment with Hyperledger Besu

Hyperledger Besu is an open-source Ethereum client designed for enterprise use, supporting Ethereum’s public and private networks.

In this part:
	•	A custom blockchain smart contract was developed and deployed on the Hyperledger Besu network.
	•	Demonstrated interaction with the contract using JSON-RPC API and Besu CLI tools.

Key Features:
	•	Deployment on a private Besu network.
	•	Contract compilation using Solidity and deployment via Web3 / Besu API.
	•	Verified transaction flow and network consensus.

Part 2: New Hyperledger Product Demonstration

This section demonstrates a Hyperledger tool or lab product that was not covered during the course lectures.
	•	Selected Product: (e.g., Hyperledger Explorer, Hyperledger Fabric CA, or Hyperledger Caliper).
	•	Conducted a slide review and provided a hands-on demo using the official Hyperledger GitHub repository.

Technologies Used
	•	Hyperledger Besu
	•	Solidity
	•	Web3.js / Web3j
	•	Corda Framework
	•	Java / Kotlin (for CorDapp)
	•	Docker (for containerized nodes)
	•	Git & GitHub


Setup Instructions

1. Clone the Repository

git clone https://github.com/gitslem/Deploy-Smart-Contract-With-Hyperledger-Besu
cd Deploy-Smart-Contract-With-Hyperledger-Besu

2. Part 1: Hyperledger Besu Smart Contract
	•	Install Hyperledger Besu: Besu Installation Guide
	•	Compile and deploy the smart contract:

npm install
truffle compile
truffle migrate --network besu

3. Part 2: New Hyperledger Product
	•	Navigate to /hyperledger-product-demo directory.
	•	Follow instructions in README.md inside the folder.

4. Part 3: Corda App
	•	Navigate to /corda-hello-world.
	•	Build CorDapp:

./gradlew deployNodes

	•	Run nodes:

./build/nodes/runnodes


Project Structure

blockchain-assignment/
│
├── part1-besu-smart-contract/
│   ├── contracts/
│   ├── migrations/
│   ├── truffle-config.js
│
├── part2-hyperledger-product/
│   ├── slides/
│   ├── demo-files/
│
├── part3-corda-hello-world/
│   ├── workflows/
│   ├── contracts/
│   ├── build.gradle
│
└── README.md


References
	•	Hyperledger Besu Documentation
	•	Hyperledger Labs
	•	Corda Documentation

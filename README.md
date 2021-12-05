
![](https://raw.githubusercontent.com/BdcashProtocol/bdcash-mediakit/main/cole%C3%A7%C3%A3o/bdcash-logo-300h.png)  
  

# BDCash Nodesh Network

This repository will be used to manage all the NodeSH managed by BDCash directly, so as to be able to match IP addresses with BDCash addresses of the Nodesh and to be able to assign the subdomains necessary to operate via SSL.

## Objective of the initiative

BDCash Blockchain is a decentralized and distributed network not having a single controlling body. To ensure distribution to the second level network of the NodeSH as well, the network must be equally maintained by several parties. To guarantee this result, BDCash Foundation will create a staking pool by allocating an amount of 5,000 BDCASH for each activated Nodesh for a maximum total of 100,000 BDCASH.

## Who is it for?

The initiative is mainly aimed at developers, companies interested in developing the BDCash network and enthusiastic about the project who want to contribute as well as the BDCash Consortium network contract. Technical skills are required for the installation and management of the machine, which will be rewarded based on constant efficiency.

## Reward system

The rewards will be divided among the participants by calculating the daily total produced by the pool and dividing it by the number of participations for each Nodesh. The holdings for each Nodesh are calculated based on uptime and therefore the participation of each Nodesh is calculated in 1440 shares. The total sum of the holdings will give us 100% of the uptime in minutes.

Each part is acquired if every minute the Nodesh satisfies the following requirements:

- The Nodesh exposes its API through `https` to the address assigned to it
- The Nodesh is active, i.e. it responds to the `/ wallet / getinfo` call positively.
- The Nodesh is synchronized to the BDCash network with a maximum offset of ** 1 ** block.
- The Nodesh code is intact and the checksum, countersigned with the request timestamp and signed with the same address entered in the `peers` file.

The sum of the individual uptime will return the total shares and therefore the percentage calculations for each Nodesh. These will be sent automatically every 24 hours to the address.

## How the Nodesh list works

All the accepted NodeSH will be noted in the `peers` file and must be noted in a specific form. Each line should contain this type of information:

``
PROGRESS_N: IP_ADDRESS: PUBKEY_Nodesh
``

The progressive number will be obtained by adding `1` to the higher progressive number. For numbers less than `10` it is necessary to add the initial` 0` in order to have progressives of two digits.

## How to request the addition

The addition must be done directly in this repository, communicating the required parameters `ADDRESS_IP` and` PUBKEY_NODESH`. Following the request and acceptance, the Nodesh will be inserted into the `peers` file and therefore can be called up from the npm` @bdcash-protocol/core` library.
The status of the Nodesh can be checked on the https://watchtower.bdcashplatform.com platform.

** It will not be possible to request the insertion of more than 3 NodeSH for a single subject. **

## Delisting policy

If an Nodesh remains inactive for more than 7 days then it will be automatically delisted from the `peers` list and then from` @bdcash-protocol/core`.

## Minimum technical requirements for the Nodesh

It is essential to equip the Nodesh with adequate power, therefore it is recommended to use a Linux VPS with at least 2GB of Ram and 50GB SSD.
It is recommended to ** not ** activate multiple NodeSH within the same server, be it physical or virtual, to avoid centralization and network overload. Supported IP addresses are IP v4 addresses only.

# Document - Data storage program

In order to intensify data archiving and storage activities, a new decentralized archiving program based on S3 Bucket (AWS, DigitalOcean, etc.) was activated.

Each IdaNode can be equipped with its own storage counterpart in order to guarantee greater security and greater replicability of the information entered in the network.
This type of storage, for users, is not free but is paid in advance (in BDCASH) through a multisignature address created between the user, the pool and the idanode with a signing power of 2 out of 3.

 This means that anyone of the two parties (idanode and user) can access the funds thanks to the pool, which will in fact act as a smart contract between the parties, verifying that the user is up to date with their payments and that the idanode is actually still in possession of the file and that the file is reachable at the time of the daily payout.

The user will still be able to access the funds entered even if the pool disappears, with the help of the IdaNode.

Each user can therefore decide from a minimum of 6 replicas to the maximum represented by the number of active NodeSH. Then the cost of storing the information will be multiplied by the number of selected replicas. It is clear that a greater number of replicas will guarantee greater accessibility, as well as greater resilience to censorship and data destruction.

## Why not do it within the same server

The answer is quite simple and mainly concerns the cost of internal storage to servers compared to the cost of S3 storage. For example, to get 250GB of storage on a Digital Ocean server you need $ 80 per month, to get the same amount on a Space (S3) you only need $ 5!

# Benefits
## Data synchronization

However, since the data is inside one or more S3s, you can always download them and keep them updated on your computer, server or other backup space.

## Automatic notarization

The main advantage of such a solution, compared to any other cloud, is the automatic notarization of all files. These files can actually be managed via the graphical interface in subfolders, represented by blockchain addresses.

## Checking files

The verification of the files takes place thanks to a second dApp, connected to an address or a QR code. The dApp will be able to read and download all the data and all the information entered within the address itself. If the file type is PDF or Image, you can have a preview via dApp or you can download the file itself to your device.

# Storage cost

The storage cost is $ 0.015 (_about 0.501 BDCASH_) for 1GB of storage space per month and this cost will be given in the form of rewards in BDCASH to the NodeSH selected by the user in advance. This procedure will take place automatically via the graphical interface on the Documenta dApp, be it locally or in its online version https://manager.documenta.app.

Clearly, everything will be commensurate with the specific size of the inserted files and the price in BDCASH will be adjusted every 1440 blocks on the basis of the average value of the BDCASH in the last 2 weeks, so as to guarantee fairness and balance even in the case of a change in value and will be distributed to at the same time the rewards to each participating IdaNode.

# Delete files

The files will be deleted if the user asks to do so and if, clearly, the user does not enter the amount of BDCASH required for storage for a consecutive period of 30 days in the multisignature address. However, it is important to understand that regardless of the fact that the files are deleted from the cloud storage, notarization will exist at the blockchain level forever as well as any local copies.
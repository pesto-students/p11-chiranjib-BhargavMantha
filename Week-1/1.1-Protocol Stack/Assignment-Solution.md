# Assignment-1 ---> Bhargav Mantha
### Q. What is a protocol stack, and how is it used in web development?
![Protocol stack](https://www.w3.org/People/Frystyk/thesis/tcp.gif)


1.  A protocol stack, also known as a network stack, is a set of communication protocols that work together to enable network communication.

2.  It consists of a series of layers, with each layer providing specific functionalities and services to the layer above it.

3.  In web development, protocol stacks are used to facilitate communication between web servers and clients, such as web browsers.
4. The most commonly used protocol stack in web development is the TCP/IP stack, which consists of four layers: 
	* **the application layer**: *This layer is responsible for providing network services to the end-user applications. It includes protocols such as HTTP, FTP, SMTP, DNS, and others.* 
	* **transport layer**: *This layer is responsible for providing end-to-end communication between the source and destination devices. It includes protocols such as TCP and UDP.*
	* **network layer**: *This layer is responsible for routing data packets between different networks. It includes the Internet Protocol (IP).*
	* **data link layer** : *This layer is responsible for transmitting data over a physical network. It includes the Media Access Control (MAC) and Logical Link Control (LLC) sublayers.*

**The 4 layers in the TCP/IP protocol stack are part of the Network and Transport layers in the OSI model.**
----
####  APPLICATION LAYER
* *At the application layer, web developers use protocols like HTTP (Hypertext Transfer Protocol) and HTTPS (Hypertext Transfer Protocol Secure) to enable the transfer of web resources, such as HTML pages and images, between web servers and clients.*

####  TRANSPORT LAYER
* *The transport layer is responsible for providing reliable, end-to-end data transfer between the web server and client, and is typically implemented using the Transmission Control Protocol (TCP). The network layer is responsible for routing data packets between different networks, and is typically implemented using the Internet Protocol (IP). The data link layer provides a means for transferring data over a physical network, such as Ethernet or Wi-Fi.*

#### NETWORK LAYER
  * *The network layer is the third layer of the TCP/IP protocol stack, and it is responsible for routing data packets between different networks. Its primary role is to provide a logical addressing system and a mechanism for delivering data packets across multiple networks.*
  
#### DATA LINK LAYER
* *The data link layer is responsible for transmitting data over a physical network. Its primary role is to provide a reliable communication channel between two directly connected devices, such as a computer and a switch or a router.*

When a device wants to send a data packet to another device on a different network, it must first determine the destination device's IP address. It can then encapsulate the data packet in an IP header, which includes the source and destination IP addresses. The device then sends the packet to its default gateway, which is a device on the local network that is responsible for forwarding packets to other networks.

The default gateway looks at the destination IP address and determines which network the packet needs to be forwarded to. It then encapsulates the packet in a new IP header and forwards it to the next hop on the path to the destination network. This process continues until the packet reaches its destination.

In summary, the network layer is responsible for routing data packets across multiple networks using the Internet Protocol (IP). It provides a logical addressing system that allows devices to communicate with each other across different networks, and it uses routers and gateways to forward packets to their destinations.

Overall, the protocol stack is used in web development to ensure that web resources are transferred efficiently, reliably, and securely between web servers and clients. Different layers of the protocol stack work together to provide different functionalities, making it possible for web developers to create and deliver web applications that are fast, reliable, and secure.
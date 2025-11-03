'use client'

import { useState } from 'react'

const articles = [
  {
    title: "The Foundation: How Computers Actually Think",
    content: (
      <>
        <p className="intro">
          Listen, here's the thing about computers that nobody tells you straight: they're incredibly stupid. I mean it. The most powerful supercomputer on Earth can't tell the difference between a cat and a muffin without being explicitly taught. Yet somehow, these dumb machines run everything from your coffee maker to nuclear submarines. How's that work?
        </p>

        <h2>The Binary Truth</h2>
        <p>
          At the absolute core, computers only understand two things: on and off, one and zero, yes and no. That's it. Everything else—your photos, your music, that embarrassing tweet you deleted—it's all just ones and zeros arranged in clever patterns. We call this binary, and it's the only language computers truly speak.
        </p>
        <p>
          Think about it like Morse code, but way more rigid. In Morse, you've got dots and dashes. In binary, you've got bits. Eight bits make a byte, and suddenly you can represent 256 different values (2^8, for those keeping score). That's enough to handle every letter, number, and symbol you'd find on a standard keyboard.
        </p>

        <h2>The Logic Gates: Where Magic Happens</h2>
        <p>
          Here's where it gets genuinely interesting. Inside every processor, you've got billions of tiny switches called transistors. These transistors form logic gates—AND, OR, NOT, XOR—and they're combining those ones and zeros in ways that let computers make decisions.
        </p>
        <p>
          An AND gate? It only outputs 1 if both inputs are 1. An OR gate? It outputs 1 if either input is 1. Sounds simple, right? But stack enough of these together—and modern processors have billions—and suddenly you can do calculus, render 3D graphics, or beat the world champion at chess.
        </p>

        <h2>The Von Neumann Architecture</h2>
        <p>
          Back in the 1940s, a brilliant mathematician named John von Neumann laid out the blueprint that basically every computer still follows today. His insight was simple but revolutionary: store both the program instructions and the data in the same memory.
        </p>
        <p>
          Before this, computers were hard-wired for specific tasks. Want to do a different calculation? Physically rewire the machine. Von Neumann said, "Screw that. Make the program itself just another piece of data." Suddenly, computers became general-purpose machines. One day it's calculating artillery trajectories, the next day it's processing payroll. Same hardware, different instructions.
        </p>

        <h2>Memory Hierarchy: The Speed Pyramid</h2>
        <p>
          Here's a dirty secret: computer memory is slow. Well, some of it is blazingly fast, but it's expensive and tiny. The cheap, spacious memory? Comparatively glacial. So engineers built a hierarchy:
        </p>
        <ul>
          <li><strong>Registers:</strong> Tiny storage spaces right inside the CPU. Stupidly fast. Measured in nanoseconds.</li>
          <li><strong>Cache:</strong> Slightly bigger, still inside or very close to the CPU. Multiple levels (L1, L2, L3), each larger and slower than the last.</li>
          <li><strong>RAM:</strong> Your main memory. Gigabytes of space, but takes dozens of nanoseconds to access.</li>
          <li><strong>Storage:</strong> SSDs and hard drives. Massive capacity, but we're talking milliseconds now.</li>
        </ul>
        <p>
          The whole system works because of a principle called locality. Most programs don't randomly jump all over memory—they tend to use the same data and instructions repeatedly. So you keep the hot stuff in fast cache, and it works out beautifully most of the time.
        </p>

        <h2>The Fetch-Execute Cycle</h2>
        <p>
          Every computer program, no matter how complex, breaks down into this simple loop: fetch an instruction from memory, decode what it means, execute it, and repeat. That's it. Your CPU is doing this billions of times per second, but conceptually, it's just fetch, decode, execute, fetch, decode, execute, over and over until you shut it down.
        </p>
        <p>
          Modern CPUs have gotten fancy with this—pipelining multiple instructions at once, executing operations out of order, predicting which branches of code you'll take next—but the fundamental cycle remains the same as it was in 1945.
        </p>
      </>
    )
  },
  {
    title: "Algorithms: The Recipes That Run the World",
    content: (
      <>
        <p className="intro">
          An algorithm is just a recipe. That's all it is. You want to make bread? Follow a specific sequence of steps. You want to sort a million names alphabetically? Same deal. The difference is that computer algorithms need to be absolutely precise—no "add salt to taste" or "bake until golden brown." The machine needs exact instructions, every single time.
        </p>

        <h2>Big O Notation: Why Speed Matters</h2>
        <p>
          When computer scientists analyze algorithms, they don't much care if algorithm A takes 2 seconds and algorithm B takes 3 seconds on some random test. What they care about is: how does the time scale as you feed in more data?
        </p>
        <p>
          That's where Big O notation comes in. It's a way of describing the worst-case growth rate of an algorithm. O(1) means constant time—doesn't matter if you've got 10 items or 10 million, it takes the same time. O(n) means linear time—double the input, double the time. O(n²) means quadratic—double the input, quadruple the time. You can see how this gets ugly fast.
        </p>
        <p>
          A real-world example: searching for a name in an unsorted list is O(n)—you might have to check every single entry. But if that list is sorted? Binary search gets you O(log n). With a million entries, that's the difference between potentially checking all million items versus checking maybe 20. That's not a minor optimization; that's the difference between usable and unusable.
        </p>

        <h2>Sorting: The Fundamental Problem</h2>
        <p>
          Sorting data is so common that entire forests have been sacrificed to papers analyzing different sorting algorithms. The classics:
        </p>
        <ul>
          <li><strong>Bubble Sort:</strong> Compare adjacent items, swap if needed, repeat until sorted. Simple to understand, terrible in practice. O(n²). Nobody uses this in production unless they hate their users.</li>
          <li><strong>Merge Sort:</strong> Divide the list in half, sort each half, merge them back together. Elegant, consistent O(n log n) performance. The reliable workhorse.</li>
          <li><strong>Quick Sort:</strong> Pick a pivot element, partition around it, recurse. Average case O(n log n), but worst case O(n²). Still widely used because that average case is genuinely fast.</li>
          <li><strong>Heap Sort:</strong> Build a heap data structure, repeatedly extract the max element. Always O(n log n), never uses extra space. Good for when memory is tight.</li>
        </ul>
        <p>
          The thing is, for most practical purposes, you just use whatever sorting function your programming language provides. Those implementations have been optimized over decades by people way smarter than most of us. Don't reinvent the wheel unless you've got a damn good reason.
        </p>

        <h2>Data Structures: Where You Put Your Stuff</h2>
        <p>
          Algorithms and data structures are two sides of the same coin. The structure you choose determines which algorithms make sense. A few you absolutely need to know:
        </p>
        <ul>
          <li><strong>Arrays:</strong> Contiguous blocks of memory. Fast random access (O(1)), slow insertion/deletion in the middle (O(n)).</li>
          <li><strong>Linked Lists:</strong> Each element points to the next. Fast insertion/deletion (O(1) if you're already there), slow search (O(n)).</li>
          <li><strong>Hash Tables:</strong> Use a hash function to map keys to array positions. Average case O(1) for insertion, deletion, and lookup. The Swiss Army knife of data structures.</li>
          <li><strong>Trees:</strong> Hierarchical structures. Binary search trees give you O(log n) operations if balanced. B-trees power most databases.</li>
          <li><strong>Graphs:</strong> Nodes connected by edges. Model everything from social networks to city road systems. Algorithms like Dijkstra's and A* solve real-world routing problems.</li>
        </ul>

        <h2>Dynamic Programming: Clever Reuse</h2>
        <p>
          Some problems naturally break into overlapping subproblems. Calculate the 50th Fibonacci number naively, and you'll recalculate the same values thousands of times. Dynamic programming says: remember what you've already computed and reuse it.
        </p>
        <p>
          It's a simple idea that transforms certain exponential-time problems into polynomial-time ones. The classic example is the knapsack problem—given items with weights and values, maximize the value you can carry in a limited capacity. Brute force tries every combination. Dynamic programming builds up a table of optimal solutions for smaller capacities and reuses those results. Suddenly a problem that would take years runs in seconds.
        </p>

        <h2>The Limits: What Computers Can't Do</h2>
        <p>
          Not every problem has an efficient solution. The traveling salesman problem—find the shortest route visiting a set of cities—is NP-hard. No known polynomial-time algorithm exists, and many computer scientists believe none ever will. For small sets of cities, you can brute force it. For 50 cities? There are more possible routes than atoms in the universe. Good luck.
        </p>
        <p>
          The point is, some problems are fundamentally hard. Understanding which problems are tractable and which aren't is just as important as knowing algorithms for the tractable ones. Don't waste time trying to find the perfect solution to an intractable problem. Find a good-enough approximation and move on.
        </p>
      </>
    )
  },
  {
    title: "Operating Systems: The Conductor of Chaos",
    content: (
      <>
        <p className="intro">
          Your operating system is the reason you don't have to worry about which physical sector of your hard drive that file is on, or which CPU core should execute which instruction, or how to share memory between 50 running programs. It's the layer between the raw hardware and the applications you actually care about. And it's doing a hell of a lot more than you probably realize.
        </p>

        <h2>Process Management: Juggling Act</h2>
        <p>
          Your computer is probably running dozens or hundreds of processes right now. Each one thinks it has the entire machine to itself. How? The operating system is rapidly switching between them, giving each a tiny slice of CPU time—maybe 10 milliseconds—before moving to the next. This is called time-sharing, and it happens so fast you never notice.
        </p>
        <p>
          The OS maintains a process table tracking every running program: what state it's in, which resources it's using, how much CPU time it's consumed. The scheduler decides which process runs next. Is it simple round-robin? Priority-based? Does it give more time to interactive programs so your UI stays responsive? Different systems make different choices.
        </p>

        <h2>Memory Management: Virtual Reality</h2>
        <p>
          Every process gets its own virtual address space. From the program's perspective, it has gigabytes of contiguous memory starting at address zero. In reality, the OS and hardware are translating those virtual addresses to physical RAM locations on the fly using a memory management unit (MMU).
        </p>
        <p>
          Why bother with this translation? Security, for one—programs can't access each other's memory. Flexibility, for another—the OS can move things around in physical RAM without programs knowing or caring. And when you run out of physical RAM? The OS swaps less-used pages to disk. Your program never knows the difference, aside from everything getting slower.
        </p>
        <p>
          Page faults occur when a program accesses memory that's not currently in RAM. The OS pauses the program, loads the required page from disk, updates the page tables, and resumes execution. To the program, it just looks like a slow memory access.
        </p>

        <h2>File Systems: Organized Chaos</h2>
        <p>
          A file system is how the OS organizes data on storage devices. At the hardware level, you've got blocks of bytes. At the user level, you've got files and directories. The file system bridges that gap.
        </p>
        <p>
          Different file systems make different tradeoffs. FAT32 is simple but limited (4GB max file size, no permissions). NTFS adds journaling, encryption, and permissions. ext4 is the Linux workhorse—reliable, fast, well-tested. Newer systems like Btrfs and ZFS add features like snapshots, built-in RAID, and data checksumming.
        </p>
        <p>
          The inode structure (in Unix-like systems) stores metadata about files: size, permissions, timestamps, and pointers to the actual data blocks. Directories are just special files mapping names to inode numbers. When you delete a file, you're really just removing a directory entry. The data might still be there until it's overwritten, which is why data recovery tools can sometimes save your bacon.
        </p>

        <h2>Concurrency: Things Happening at Once</h2>
        <p>
          Modern programs often need to do multiple things simultaneously. Download a file while updating the UI while processing data in the background. The OS provides primitives for this: threads, locks, semaphores, condition variables.
        </p>
        <p>
          Threads are like lightweight processes sharing the same memory space. Sounds great, right? Multiple threads can work in parallel on multi-core systems. The catch: they can step on each other. Two threads modifying the same variable simultaneously? You've got a race condition. The result depends on exact timing, which means your program works perfectly 99% of the time and crashes mysteriously the other 1%.
        </p>
        <p>
          Locks prevent this by ensuring only one thread at a time can access shared data. But locks bring their own problems. Deadlock: Thread A holds lock 1 and waits for lock 2, while Thread B holds lock 2 and waits for lock 1. Both wait forever. Avoiding deadlocks requires careful design and consistent lock ordering.
        </p>

        <h2>System Calls: Crossing the Boundary</h2>
        <p>
          User programs run in a restricted mode—they can't directly access hardware or modify critical system structures. When they need the OS to do something (read a file, allocate memory, send network data), they make a system call.
        </p>
        <p>
          A system call is essentially a controlled jump into kernel mode. The CPU switches from user mode to kernel mode, the OS handles the request, and control returns to the user program. This context switch has overhead—thousands of CPU cycles—so efficient programs minimize system calls.
        </p>

        <h2>The Kernel: The Inner Circle</h2>
        <p>
          The kernel is the core of the OS, always resident in memory, always running in privileged mode. It handles the critical stuff: process scheduling, memory management, device drivers, interrupt handling.
        </p>
        <p>
          Monolithic kernels (like Linux) include most functionality in the kernel itself. Microkernels (like Minix) keep the kernel minimal and run most services as user-space processes. Each approach has tradeoffs. Monolithic kernels are faster (less context switching) but less modular. Microkernels are cleaner and more secure but potentially slower.
        </p>
        <p>
          Device drivers are the interface between the OS and hardware. They translate generic OS requests into device-specific commands. Writing drivers is notoriously difficult—you're working at the lowest level, dealing with hardware quirks, timing requirements, and the consequences of any mistake being a kernel panic and system crash.
        </p>
      </>
    )
  },
  {
    title: "Networks: The Connected World",
    content: (
      <>
        <p className="intro">
          The internet is not magic, though it sometimes feels that way. It's a massive, distributed system built on surprisingly simple principles. Packets of data hopping from router to router, each one making local decisions, somehow reliably delivering your cat videos across continents in milliseconds. Let's demystify how this actually works.
        </p>

        <h2>The OSI Model: Layers Upon Layers</h2>
        <p>
          Network engineers love the OSI seven-layer model. It's a theoretical framework that separates networking into distinct layers, each building on the one below. In practice, we mostly talk about the TCP/IP model with four layers, but understanding the concept of layering is crucial.
        </p>
        <p>
          At the bottom, the physical layer: actual voltages on wires, or radio waves in the air. Above that, the data link layer: Ethernet frames, MAC addresses, local network communication. Then the network layer: IP addresses, routing packets between networks. Transport layer: TCP and UDP, reliable streams versus raw datagrams. And finally, application layer: HTTP, DNS, SSH, all the protocols we actually interact with.
        </p>
        <p>
          Each layer only needs to understand the layer immediately above and below it. This abstraction lets you change the physical medium (wire to wireless) without changing the application layer. It's modular design at a planetary scale.
        </p>

        <h2>IP Addresses: Your Internet Name</h2>
        <p>
          Every device on a network needs an address. In IPv4, that's four numbers from 0-255, like 192.168.1.1. Sounds simple, but we're running out—there are only about 4 billion possible IPv4 addresses, and we've already allocated most of them.
        </p>
        <p>
          IPv6 solves this with 128-bit addresses, giving us approximately 340 undecillion addresses. That's 340 followed by 36 zeros. Enough to give every grain of sand on Earth its own address, with plenty left over. The notation is different (8 groups of 4 hex digits, like 2001:0db8:85a3::8a2e:0370:7334), but the concept is the same: unique identifiers for devices.
        </p>
        <p>
          Private IP ranges (10.x.x.x, 192.168.x.x, 172.16-31.x.x) are reserved for local networks. Your router does Network Address Translation (NAT) to let many local devices share one public IP. This is why your laptop's IP address is different from what websites see—they see your router's public IP.
        </p>

        <h2>Routing: Finding the Path</h2>
        <p>
          When you send a packet, it doesn't directly know the route to the destination. Instead, routers make local decisions. Each router has a routing table saying "for this range of addresses, forward to this next router." The packet hops from router to router, each one getting it closer to the destination.
        </p>
        <p>
          Routing protocols like BGP (Border Gateway Protocol) let routers share information about which networks they can reach. It's a distributed algorithm—no single router knows the entire internet topology, but collectively, they find paths. When a network goes down, routers update their tables and traffic reroutes around the failure. Usually. Sometimes things break spectacularly, which is how you get news stories about entire countries going offline.
        </p>

        <h2>TCP: Reliable Delivery</h2>
        <p>
          The Internet Protocol (IP) is fundamentally unreliable. Packets might arrive out of order, duplicated, or not at all. For many applications, that's unacceptable. TCP fixes this.
        </p>
        <p>
          TCP establishes a connection (the famous three-way handshake: SYN, SYN-ACK, ACK), then reliably delivers a stream of bytes. It numbers each byte, and the receiver acknowledges what it's received. If an acknowledgment doesn't arrive in time, TCP retransmits. If packets arrive out of order, TCP buffers them and delivers them to the application in the correct sequence.
        </p>
        <p>
          TCP also does flow control—it won't overwhelm a slow receiver—and congestion control—it backs off when the network is congested. These mechanisms are why the internet works at all under load. They're also why TCP is slower than UDP for some applications.
        </p>

        <h2>UDP: Fast and Loose</h2>
        <p>
          UDP is the opposite of TCP. It just sends packets and hopes for the best. No handshake, no guarantees, no retransmission. Sounds terrible, but for real-time applications (video calls, online games), UDP is better. A dropped frame is preferable to a delayed one. Better to skip ahead than wait for late data that's no longer relevant.
        </p>
        <p>
          Modern protocols like QUIC (used in HTTP/3) build reliability on top of UDP, implementing only the features they need rather than using TCP's one-size-fits-all approach. It's a pragmatic compromise: UDP's speed with custom reliability layers.
        </p>

        <h2>DNS: The Internet's Phone Book</h2>
        <p>
          Humans remember names, computers use numbers. DNS (Domain Name System) translates between them. You type google.com, and DNS translates that to an IP address like 142.250.185.46.
        </p>
        <p>
          DNS is hierarchical and distributed. Root servers know about top-level domains (.com, .org, .uk). Those servers know about second-level domains (google.com, wikipedia.org). Those servers know about specific hosts (www.google.com, mail.google.com). Your DNS query cascades through this hierarchy until it finds an answer.
        </p>
        <p>
          Caching is critical. Your computer caches DNS responses, your router caches them, your ISP caches them. Most queries never leave your local network. When DNS breaks, nothing works, which is why DNS outages are so catastrophic despite DNS being conceptually simple.
        </p>

        <h2>HTTP: The Web's Foundation</h2>
        <p>
          HTTP is the protocol browsers use to fetch web pages. It's text-based and human-readable, which made debugging early web applications much easier. A typical HTTP request: GET /index.html HTTP/1.1, followed by headers (Host: example.com, User-Agent: Mozilla/5.0...), then optional body data.
        </p>
        <p>
          The server responds with a status code (200 OK, 404 Not Found, 500 Internal Server Error), headers (Content-Type: text/html, Content-Length: 1234), and the actual content. Simple protocol, powerful ecosystem built on top of it.
        </p>
        <p>
          HTTPS adds encryption via TLS. Your browser and the server negotiate a cipher, exchange keys, and encrypt all further communication. This prevents eavesdropping and tampering. The padlock icon in your browser means this negotiation succeeded and the connection is encrypted. No padlock? Anyone between you and the server can read your data.
        </p>
      </>
    )
  },
  {
    title: "Databases: Organized Persistence",
    content: (
      <>
        <p className="intro">
          Data that disappears when your program stops is useless for most applications. You need persistence. Databases handle this, along with ensuring consistency, enabling concurrent access, and providing efficient queries. They're deceptively complex systems that make difficult problems look easy.
        </p>

        <h2>Relational Databases: Tables and Relations</h2>
        <p>
          The dominant database model for decades has been relational. Data lives in tables (relations) with rows (tuples) and columns (attributes). Tables have defined schemas—this column is an integer, that one's text, this one can't be null.
        </p>
        <p>
          The power comes from relationships between tables. A users table has a primary key (user_id). An orders table has a foreign key referencing users (placed_by_user_id). You can join these tables to get all orders for a specific user, or all users who've placed orders in the last month, or whatever query you need.
        </p>
        <p>
          SQL (Structured Query Language) lets you express these queries declaratively. You say what you want, not how to get it. SELECT users.name, COUNT(orders.id) FROM users JOIN orders ON users.id = orders.user_id GROUP BY users.name. The database engine figures out the efficient execution plan.
        </p>

        <h2>ACID Properties: The Guarantees</h2>
        <p>
          Serious databases provide ACID guarantees: Atomicity, Consistency, Isolation, Durability. Let's break those down.
        </p>
        <p>
          Atomicity means transactions are all-or-nothing. Transfer money from account A to account B? Either both the debit and credit happen, or neither does. No partial updates leaving the data in an inconsistent state.
        </p>
        <p>
          Consistency means the database enforces its constraints. If you've defined that a foreign key must reference an existing row, the database won't let you insert an invalid reference. The data remains in a valid state.
        </p>
        <p>
          Isolation means concurrent transactions don't interfere with each other. Even though multiple operations are happening simultaneously, the result is as if they ran sequentially. This is incredibly hard to implement efficiently, so databases offer different isolation levels trading off performance versus strict isolation.
        </p>
        <p>
          Durability means committed data survives crashes. Once the database says "transaction committed," that data is on disk (or at least on multiple machines in distributed systems). A power failure won't lose it.
        </p>

        <h2>Indexes: Speed Through Redundancy</h2>
        <p>
          Without indexes, finding a specific row requires scanning the entire table. For large tables, this is unacceptably slow. Indexes create additional data structures (usually B-trees) that let you find rows quickly.
        </p>
        <p>
          Index the user_id column, and looking up a user by ID becomes O(log n) instead of O(n). The tradeoff? Indexes take space (you're storing the data twice in different arrangements) and slow down writes (you're updating both the table and the indexes). Good database design means indexing frequently-queried columns while not over-indexing and wasting space.
        </p>

        <h2>Transactions and Locking</h2>
        <p>
          When multiple clients access the database simultaneously, you need coordination. Locks prevent conflicts. A shared lock lets multiple readers access data simultaneously. An exclusive lock gives one writer sole access, blocking all readers and other writers until it's released.
        </p>
        <p>
          But locks can deadlock (client A holds lock 1 and waits for lock 2, client B holds lock 2 and waits for lock 1). Databases detect deadlocks and abort one transaction, letting the other proceed. The aborted client has to retry. It's annoying but necessary.
        </p>
        <p>
          Optimistic concurrency control is an alternative. Instead of locking, each transaction proceeds assuming no conflicts. At commit time, the database checks if anyone else modified the data. If so, the transaction aborts and retries. This works well for low-conflict workloads where retries are rare.
        </p>

        <h2>NoSQL: Different Tradeoffs</h2>
        <p>
          Relational databases are powerful but not perfect for every use case. NoSQL databases trade some guarantees for different characteristics.
        </p>
        <p>
          Key-value stores (Redis, DynamoDB) are essentially distributed hash maps. Look up any value in O(1) by its key. No complex queries, no joins, just fast reads and writes.
        </p>
        <p>
          Document databases (MongoDB, CouchDB) store JSON-like documents instead of fixed-schema rows. More flexible, but you lose some of SQL's query power.
        </p>
        <p>
          Column-family stores (Cassandra, HBase) organize data by column rather than row, making them efficient for queries that access a few columns across many rows.
        </p>
        <p>
          Graph databases (Neo4j, Amazon Neptune) are optimized for highly connected data. Finding friends-of-friends-of-friends in a social network? Graph databases handle this efficiently where relational databases struggle.
        </p>

        <h2>CAP Theorem: Pick Two</h2>
        <p>
          For distributed databases spanning multiple machines, the CAP theorem says you can only guarantee two of three properties: Consistency, Availability, Partition tolerance.
        </p>
        <p>
          Consistency means all nodes see the same data. Availability means every request gets a response. Partition tolerance means the system works even if network connections between nodes fail.
        </p>
        <p>
          Network partitions are inevitable in distributed systems, so you're really choosing between consistency (CP) and availability (AP). Traditional databases choose consistency—they'd rather be unavailable than serve stale data. Many NoSQL systems choose availability—they'd rather serve slightly stale data than refuse to serve at all.
        </p>
        <p>
          Modern systems like Spanner try to minimize the tradeoffs using tricks like synchronized clocks and clever coordination protocols, but the fundamental theorem still applies. There's no free lunch in distributed systems.
        </p>
      </>
    )
  },
  {
    title: "Security: The Eternal Arms Race",
    content: (
      <>
        <p className="intro">
          Every system connected to the internet is under constant attack. I don't mean targeted attacks by skilled hackers—though those happen too. I mean automated bots scanning for vulnerabilities 24/7. Security isn't a feature you add at the end; it's a mindset that has to permeate every decision. And even then, you'll probably get owned eventually. Let's talk about how to make that harder.
        </p>

        <h2>Authentication: Proving Who You Are</h2>
        <p>
          Authentication is verifying identity. Traditionally, this meant passwords. Passwords are terrible. People choose weak ones, reuse them across sites, and store them in plain text files called "passwords.txt" on their desktop. Even long random passwords can be phished—social engineering is easier than breaking cryptography.
        </p>
        <p>
          Multi-factor authentication (MFA) helps. Something you know (password) plus something you have (phone receiving a code) or something you are (fingerprint). Defeating both factors is harder than defeating one. Not impossible—SIM-swapping attacks intercept SMS codes, malware can steal biometric data—but the barrier is higher.
        </p>
        <p>
          Modern alternatives include OAuth (delegate authentication to trusted providers like Google), passwordless systems using WebAuthn and hardware tokens (YubiKeys), and zero-knowledge proofs (prove you know the password without revealing it). Each has tradeoffs, but all beat plain passwords.
        </p>

        <h2>Authorization: Deciding What You Can Do</h2>
        <p>
          Authentication is "who are you?" Authorization is "what can you do?" Just because you've logged in doesn't mean you should access everything. Role-based access control (RBAC) assigns permissions to roles (admin, editor, viewer) and assigns roles to users. Attribute-based access control (ABAC) makes decisions based on attributes (user's department, time of day, resource classification).
        </p>
        <p>
          The principle of least privilege: grant the minimum permissions necessary. A web app reading from the database shouldn't use a database account with DROP TABLE privileges. A user processing invoices shouldn't have admin access to the entire system. Defense in depth means even if one layer is breached, others remain.
        </p>

        <h2>Encryption: Protecting Data</h2>
        <p>
          Encryption transforms data so only those with the key can read it. Symmetric encryption uses the same key for encryption and decryption (AES is the current standard). Fast and efficient, but you need to securely share the key. Asymmetric encryption uses a public/private key pair (RSA, elliptic curves). Encrypt with the public key, decrypt with the private key. Slower, but key distribution is easier.
        </p>
        <p>
          Encrypt data in transit (HTTPS, TLS, VPNs) and at rest (encrypted filesystems, database encryption). Even if an attacker steals the data, it's useless without the keys. Of course, key management becomes the problem—if the attacker steals the keys, encryption doesn't help. Hardware security modules (HSMs) and key management services help here.
        </p>
        <p>
          Hashing is one-way encryption. You can hash a password but can't reverse it back to the original. Store password hashes, not plain passwords. When a user logs in, hash what they entered and compare to the stored hash. Even if your database leaks, attackers don't get actual passwords. Use modern hashing algorithms designed for passwords (bcrypt, Argon2) that are deliberately slow to defeat brute-force attacks.
        </p>

        <h2>Common Vulnerabilities: How Things Break</h2>
        <p>
          SQL injection: attacker inserts malicious SQL into input fields. Poorly-written code directly concatenates user input into SQL queries. Suddenly the attacker is executing arbitrary database commands. Solution: use parameterized queries or prepared statements. Never trust user input.
        </p>
        <p>
          Cross-site scripting (XSS): attacker injects JavaScript into web pages viewed by other users. The script runs in victims' browsers with full access to their session. Solution: sanitize all user input, escape output, use Content Security Policy headers to restrict what scripts can run.
        </p>
        <p>
          Cross-site request forgery (CSRF): attacker tricks a user's browser into making unwanted requests to a site where the user is authenticated. Your browser automatically includes cookies, so the request looks legitimate. Solution: CSRF tokens that attackers can't guess.
        </p>
        <p>
          Buffer overflows: program writes beyond allocated memory, potentially overwriting other data or code. In languages like C without bounds checking, this is a persistent issue. Attackers can overwrite return addresses to execute arbitrary code. Solution: use memory-safe languages, enable compiler protections, validate input sizes.
        </p>

        <h2>Network Security: Firewalls and Segmentation</h2>
        <p>
          Firewalls block unwanted traffic based on rules (block all incoming connections except to ports 80 and 443, allow all outgoing connections). They're a necessary first line of defense, but not sufficient—they can't inspect encrypted traffic or prevent attacks from allowed ports.
        </p>
        <p>
          Network segmentation isolates systems. Your database server shouldn't be directly accessible from the internet—put it behind application servers in a private network. Web servers in one segment, databases in another, internal admin tools in a third. Even if attackers compromise one segment, they can't easily reach others.
        </p>

        <h2>The Human Factor: Social Engineering</h2>
        <p>
          Most breaches involve human error. Phishing emails trick users into revealing credentials or clicking malicious links. Phone calls pretending to be IT support convince people to install malware. Tailgating into secure buildings behind authorized employees. No amount of technical security fixes this—you need training, awareness, and a culture where security isn't just IT's problem.
        </p>
        <p>
          Security is a process, not a product. Stay updated on vulnerabilities, patch systems promptly, monitor logs for suspicious activity, run penetration tests, have an incident response plan. Assume you'll be breached and prepare to detect and respond quickly. Perfect security doesn't exist, but you can make attackers' lives difficult enough that they move on to easier targets.
        </p>
      </>
    )
  },
  {
    title: "Software Engineering: Building Systems That Last",
    content: (
      <>
        <p className="intro">
          Writing code that works is easy. Writing code that still works six months later when requirements have changed, three people have modified it, and you've forgotten why you made certain decisions? That's hard. Software engineering is about managing complexity, making tradeoffs, and building systems that survive contact with reality.
        </p>

        <h2>Version Control: Time Travel for Code</h2>
        <p>
          Version control systems like Git track changes to code over time. Every commit is a snapshot. You can see what changed, when, and why (if you write decent commit messages, which you should). Made a mistake? Revert to an earlier version. Want to try an experimental feature? Create a branch, develop there, and merge back if it works.
        </p>
        <p>
          Git's distributed nature means everyone has a full copy of the repository. No single point of failure. Hosting services like GitHub and GitLab add collaboration features: pull requests for code review, issue tracking, continuous integration.
        </p>
        <p>
          Branching strategies matter at scale. GitFlow uses long-lived development branches and release branches. Trunk-based development keeps everyone committing to main with feature flags to hide incomplete work. Each approach has proponents, and religious wars have been fought over less.
        </p>

        <h2>Testing: Confidence Through Automation</h2>
        <p>
          Manual testing doesn't scale. Automated tests run faster, more consistently, and without getting bored. Unit tests verify individual functions in isolation. Integration tests verify components work together. End-to-end tests verify the whole system from a user's perspective.
        </p>
        <p>
          Test-driven development (TDD) writes tests before code. Red (test fails), green (make it pass), refactor (clean it up). The discipline forces you to think about interfaces before implementation. Not everyone drinks this Kool-Aid, but even skeptics agree that some automated testing beats none.
        </p>
        <p>
          Code coverage measures what percentage of code is executed by tests. High coverage doesn't guarantee good tests (you can execute every line without asserting anything meaningful), but low coverage definitely means gaps. Aim for high coverage on critical paths, accept lower coverage on trivial code.
        </p>

        <h2>Code Review: Second Pair of Eyes</h2>
        <p>
          Before merging code, someone else should read it. Code review catches bugs, enforces standards, spreads knowledge, and mentors junior developers. It's a pain in the ass—reviewing code is harder than writing it—but it pays dividends.
        </p>
        <p>
          Good reviewers look for logic errors, edge cases, security issues, and maintainability concerns. They ask "why this approach?" and "what if this assumption is wrong?" They're not just looking for syntax errors (automated linters handle that) but conceptual issues that tools miss.
        </p>
        <p>
          Good code authors make reviewers' lives easier: small pull requests, clear descriptions, self-documenting code. A 50-line change gets thorough review. A 5000-line change gets rubber-stamped because nobody has time for that.
        </p>

        <h2>Design Patterns: Solutions to Common Problems</h2>
        <p>
          Certain problems recur across projects. Design patterns codify proven solutions. The Gang of Four book documented 23 patterns; some are still relevant, some feel dated in modern languages.
        </p>
        <p>
          Singleton ensures only one instance of a class exists. Factory encapsulates object creation. Observer implements event systems where changes notify interested parties. MVC (Model-View-Controller) separates data, presentation, and logic.
        </p>
        <p>
          Patterns are tools, not dogma. Overuse leads to overengineering—abstract factories producing abstract factories producing abstract strategies. Use patterns when they simplify, not just because you know them.
        </p>

        <h2>Refactoring: Improving Without Changing Behavior</h2>
        <p>
          Code degrades over time. Requirements change, quick fixes accumulate, initial assumptions prove wrong. Refactoring improves internal structure without changing external behavior. Extract repeated code into functions. Split large functions into smaller ones. Rename variables to be clearer.
        </p>
        <p>
          The key is small, safe steps. Refactor a bit, run tests, commit. Don't rewrite everything at once—large refactorings inevitably break things and block other work. Continuous small improvements beat occasional large rewrites.
        </p>

        <h2>Documentation: For Future You</h2>
        <p>
          Code should be self-documenting—clear names, obvious structure. When that's insufficient, add comments. Not "i++" // increment i but "// skip deleted records" when the logic isn't obvious.
        </p>
        <p>
          Higher-level documentation explains architecture, design decisions, and why certain approaches were chosen. README files get people started. Architecture diagrams show system structure. ADRs (Architecture Decision Records) capture the reasoning behind major choices.
        </p>
        <p>
          The best documentation is up-to-date documentation. Out-of-date docs are worse than no docs—they mislead. Keep documentation close to code (in the same repository) and update it as part of changes, not as a separate task you'll "get to later."
        </p>

        <h2>Technical Debt: Borrowing From Future Productivity</h2>
        <p>
          Sometimes you take shortcuts. Hack something together quickly to meet a deadline. Copy-paste code instead of abstracting properly. Skip tests because there's no time. This is technical debt—it gets the job done now but makes future changes harder.
        </p>
        <p>
          Debt isn't always bad. Ship the feature, validate it works, then refactor. The problem is unmanaged debt. Interest accumulates—the code becomes harder to modify, bugs multiply, development slows. Track debt (TODOs, issue tickets) and budget time to pay it down. Otherwise, the codebase becomes unmaintainable and someone proposes a rewrite, which brings its own problems.
        </p>

        <h2>Debugging: The Scientific Method</h2>
        <p>
          Something's broken. Where do you start? Reproduce it reliably. Form a hypothesis about the cause. Test the hypothesis (add logging, use a debugger, write a minimal test case). If you're right, fix it. If you're wrong, form a new hypothesis. Repeat until solved.
        </p>
        <p>
          Rubber duck debugging helps. Explain the problem to an inanimate object (or a coworker). The act of articulating it often reveals the issue. When that fails, take a break. Fresh eyes see things you've stared at for hours without noticing.
        </p>
        <p>
          Git bisect automates finding which commit introduced a bug. Binary search through history: this commit is good, that commit is bad, Git finds the first bad commit. Pair this with automated tests, and you can pinpoint problems even in massive repositories with years of history.
        </p>
      </>
    )
  },
  {
    title: "The Machine: Hardware Realities",
    content: (
      <>
        <p className="intro">
          Software runs on hardware, and hardware has constraints. Ignore them at your peril. Every abstraction leaks eventually, and understanding what's actually happening at the silicon level makes you a better programmer. You don't need to design CPUs, but you should know what they're doing with your code.
        </p>

        <h2>CPU Architecture: The Pipeline</h2>
        <p>
          Modern CPUs don't execute one instruction at a time. They use pipelining: while one instruction executes, another decodes, and a third fetches from memory. It's an assembly line for instructions, massively increasing throughput.
        </p>
        <p>
          But pipelines have hazards. Data hazards occur when an instruction needs a result that's still being computed. Control hazards happen at branches—the CPU doesn't know which instruction to fetch next until the branch condition is evaluated. Modern CPUs use branch prediction to guess which way branches go. Guess right, and the pipeline keeps flowing. Guess wrong, and you flush the pipeline and start over—a penalty of dozens of cycles.
        </p>
        <p>
          This is why branchless code is sometimes faster despite being less readable. Conditional moves and bit tricks avoid branches, keeping the pipeline full. Compilers do this optimization automatically for simple cases, but sometimes you need to help them.
        </p>

        <h2>Cache: Locality Matters</h2>
        <p>
          Main memory is slow. CPU cache is fast but tiny. Typical numbers: L1 cache is 32KB and takes 4 cycles to access. Main memory is gigabytes but takes 200+ cycles. That's a 50x difference.
        </p>
        <p>
          Cache works via spatial and temporal locality. Spatial: if you access memory at address X, you'll probably access X+1 soon, so cache loads entire cache lines (typically 64 bytes). Temporal: if you access address X, you'll probably access it again soon, so keep recently-used data in cache.
        </p>
        <p>
          This is why iterating arrays sequentially is fast but linked lists are slow. Arrays have spatial locality—each element is adjacent in memory. Linked lists have nodes scattered throughout memory, causing cache misses on every access. The difference can be 10x or more in performance.
        </p>
        <p>
          Structure your data for cache efficiency. Use arrays instead of linked lists when possible. Pack related data together. Avoid pointer-chasing through multiple objects when a flat array would work. The CPU spends more time waiting for memory than computing, so memory access patterns matter more than instruction count for many algorithms.
        </p>

        <h2>Multi-core: Parallel Hardware</h2>
        <p>
          Clock speeds plateaued around 3-4 GHz because power consumption scales with the cube of frequency—faster clocks generate too much heat. The industry's solution: more cores instead of faster cores. Your laptop probably has 4-8 cores. A server might have 64 or more.
        </p>
        <p>
          But multi-core doesn't automatically make programs faster. You need parallel algorithms. Embarrassingly parallel problems (process 1000 images, each independently) scale perfectly. But many problems have dependencies that limit parallelism. Amdahl's Law quantifies this: if 10% of your program is sequential, you can never get more than 10x speedup, no matter how many cores you have.
        </p>
        <p>
          Cache coherence ensures all cores see the same memory. When one core writes to memory, caches on other cores must be invalidated or updated. This coordination has overhead. False sharing occurs when two cores write to different variables that happen to be in the same cache line—they ping-pong the cache line back and forth, killing performance.
        </p>

        <h2>Storage: Hierarchies All the Way Down</h2>
        <p>
          SSDs are orders of magnitude faster than hard drives. Random access that would take milliseconds on spinning rust takes microseconds on flash. Sequential reads on NVMe drives hit gigabytes per second. But even SSDs are slow compared to RAM.
        </p>
        <p>
          Hard drives aren't dead—they're cheaper per terabyte for archival storage. And they have interesting properties: sequential writes are nearly as fast as random writes after accounting for seek time. This is why append-only databases and log-structured storage perform well on spinning disks.
        </p>
        <p>
          Writing is more expensive than reading for SSDs. Flash memory cells must be erased (in large blocks) before being written. Wear leveling spreads writes across the drive to prevent individual cells from dying. The controller lies about where data is stored, remapping everything to distribute wear evenly.
        </p>

        <h2>Networks: Not Infinitely Fast</h2>
        <p>
          Local network latency is sub-millisecond. Cross-country latency is 50+ milliseconds—speed of light in fiber isn't negotiable. Bandwidth is the amount of data per second. Latency is the time for a message to arrive. High bandwidth doesn't help if you have high latency and are making many small requests.
        </p>
        <p>
          This is why chatty protocols are slow. Make 100 database queries serially over 50ms latency, and you wait 5 seconds. Batch them into one query, and it's 50ms. Design for latency by reducing round trips: batching, prefetching, caching locally.
        </p>

        <h2>Power: The Ultimate Constraint</h2>
        <p>
          On mobile devices, power consumption matters more than performance. Sending a bit over WiFi takes way more energy than a CPU instruction. Lighting the screen drains the battery faster than computation. This is why mobile apps batch network requests—fewer radio wakeups means longer battery life.
        </p>
        <p>
          Data centers care about power efficiency too. A server consuming 200 watts instead of 300 saves $100/year in electricity. Across thousands of servers, that's real money. Specialized hardware (GPUs for graphics, TPUs for machine learning) trades general-purpose flexibility for power efficiency at specific tasks.
        </p>

        <h2>The End of Moore's Law: What Now?</h2>
        <p>
          For decades, CPUs doubled in performance every 18-24 months. That's slowing. Transistors aren't shrinking as fast, and we're hitting physical limits. The future is specialization: GPUs, FPGAs, ASICs designed for specific workloads. And better algorithms—a 10x algorithmic improvement beats a 2x hardware improvement.
        </p>
        <p>
          Software performance matters again. For years, we could write inefficient code and wait for next year's hardware to make it fast. Those days are ending. Write efficient code. Profile. Optimize hot paths. Understand what the hardware is actually doing. Or accept that your software will feel sluggish while competitors eat your lunch.
        </p>
      </>
    )
  }
]

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const nextPage = () => {
    if (currentPage < articles.length - 1) {
      setCurrentPage(currentPage + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      window.scrollTo(0, 0)
    }
  }

  const goToPage = (index: number) => {
    setCurrentPage(index)
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className="page">
      <div className="menu">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰ CONTENTS
        </button>
        {menuOpen && (
          <div className="menu-list">
            {articles.map((article, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={currentPage === index ? 'active' : ''}
              >
                {index + 1}. {article.title}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="page-indicator">
        PAGE {currentPage + 1} / {articles.length}
      </div>

      <div className="container">
        <h1>{articles[currentPage].title}</h1>
        {articles[currentPage].content}
      </div>

      <div className="nav">
        <button onClick={prevPage} disabled={currentPage === 0}>
          ← PREV
        </button>
        <button onClick={nextPage} disabled={currentPage === articles.length - 1}>
          NEXT →
        </button>
      </div>
    </div>
  )
}

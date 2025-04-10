export default function PrivacyMethodsPage() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-50 text-gray-700">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Privacy Methods in Decentralized Messaging
        </h1>

        <p className="text-gray-700 mb-8 max-w-3xl">
          Decentralized messaging apps employ various technical approaches to
          ensure user privacy. This page explains the key privacy methods used
          across different platforms and how they work.
        </p>

        <div className="space-y-10">
          {/* End-to-End Encryption */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              End-to-End Encryption (E2EE)
            </h2>

            <div className="prose max-w-none text-gray-700">
              <p>
                End-to-end encryption ensures that messages can only be read by
                the sender and intended recipients. No third party, including
                the service provider, can access the content of messages.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                Technical Implementation
              </h3>

              <h4 className="text-lg font-medium mt-4 mb-1 text-gray-800">
                Signal Protocol
              </h4>
              <p>
                Developed by Open Whisper Systems, the Signal Protocol (used by
                Signal, Session in modified form) combines the Double Ratchet
                Algorithm, prekeys, and a triple Elliptic-curve Diffie–Hellman
                (3-DH) handshake. It provides perfect forward secrecy and future
                secrecy through a &quot;ratcheting&quot; process that updates
                encryption keys with every message.
              </p>

              <h4 className="text-lg font-medium mt-4 mb-1 text-gray-800">
                Olm/Megolm (Matrix)
              </h4>
              <p>
                Matrix uses Olm for one-to-one chats and Megolm for group
                communications. Olm is an implementation of the Double Ratchet
                Algorithm similar to Signal, while Megolm is a group encryption
                protocol that uses a single ratchet for all participants to
                improve performance in large rooms.
              </p>

              <h4 className="text-lg font-medium mt-4 mb-1 text-gray-800">
                X25519 (XMTP)
              </h4>
              <p>
                XMTP uses X25519 key exchange (an elliptic curve Diffie-Hellman
                implementation) for securing conversations. Messages are
                encrypted using XChaCha20-Poly1305, an authenticated encryption
                algorithm.
              </p>

              <h4 className="text-lg font-medium mt-4 mb-1 text-gray-800">
                Autocrypt (Delta Chat)
              </h4>
              <p>
                Delta Chat implements the Autocrypt standard for automated
                OpenPGP key management over email. It handles key exchange by
                attaching public keys to emails, enabling transparent encryption
                without manual key management.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
                Apps Using E2EE
              </h3>
              <p>
                All apps in our comparison use some form of E2EE, but with
                varying implementations and defaults. Matrix/Element has made
                E2EE increasingly the default but still offers non-E2EE options
                for some use cases.
              </p>
            </div>
          </section>

          {/* Metadata Protection */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Metadata Protection
            </h2>

            <div className="prose max-w-none text-gray-700">
              <p>
                Even with encrypted message content, metadata (who is talking to
                whom, when, how often, etc.) can reveal sensitive information.
                Different approaches exist to minimize metadata collection or
                exposure.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                Technical Approaches
              </h3>

              <h4 className="text-lg font-medium mt-4 mb-1 text-gray-800">
                Sealed Sender (Signal)
              </h4>
              <p>
                Signal&apos;s &quot;sealed sender&quot; protocol encrypts the
                sender&apos;s identity so that Signal&apos;s servers don&apos;t
                know who is sending a message to whom. It uses a separate
                encryption layer for delivery information, which is only
                accessible to the recipient.
              </p>

              <h4 className="text-lg font-medium mt-4 mb-1 text-gray-800">
                Onion Routing (Session, Briar)
              </h4>
              <p>
                Session routes messages through multiple intermediary nodes in
                the Oxen Service Node network, similar to Tor&apos;s onion
                routing. Each layer of encryption is peeled off at each node,
                with no single node knowing both sender and recipient. Briar
                uses Tor hidden services for routing messages when
                internet-connected.
              </p>

              <h4 className="text-lg font-medium mt-4 mb-1 text-gray-800">
                Peer-to-Peer (Briar, Jami)
              </h4>
              <p>
                By eliminating central servers entirely, P2P messaging apps like
                Briar and Jami prevent metadata collection at the server level.
                Messages are transferred directly between devices or through a
                Distributed Hash Table (DHT) without centralized logging.
              </p>

              <h4 className="text-lg font-medium mt-4 mb-1 text-gray-800">
                No Global Identifiers (SimpleX)
              </h4>
              <p>
                SimpleX takes a unique approach by eliminating all global
                identifiers. Users don&apos;t have persistent public identifiers
                (not even public keys), making it impossible to correlate users
                across conversations. Each contact connection uses separate
                queues with independent cryptographic identities.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
                Effectiveness Comparison
              </h3>
              <p>Metadata protection varies significantly across platforms:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <span className="font-medium">Strong protection:</span> Briar,
                  SimpleX, Session, Jami
                </li>
                <li>
                  <span className="font-medium">Partial protection:</span>{" "}
                  Signal, Matrix, XMTP, Status
                </li>
                <li>
                  <span className="font-medium">Limited protection:</span> Delta
                  Chat (depends on email provider)
                </li>
              </ul>
            </div>
          </section>

          {/* Identity Management */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Identity Management
            </h2>

            <div className="prose max-w-none text-gray-700">
              <p>
                How user identities are established and verified is a crucial
                aspect of privacy. Different approaches balance convenience,
                privacy, and security.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                Technical Approaches
              </h3>

              <h4 className="text-lg font-medium mt-4 mb-1 text-gray-800">
                Phone Number-Based (Signal)
              </h4>
              <p>
                Signal requires a phone number as identifier, which simplifies
                contact discovery but links identities to potentially personally
                identifiable information. Signal implements private contact
                discovery using secure enclaves to minimize exposure.
              </p>

              <h4 className="text-lg font-medium mt-4 mb-1 text-gray-800">
                Public-Private Key ID (Session)
              </h4>
              <p>
                Session generates a random public-private key pair during
                registration, with the public key serving as the user&apos;s
                Session ID. No phone number or email is required, preserving
                anonymity.
              </p>

              <h4 className="text-lg font-medium mt-4 mb-1 text-gray-800">
                Wallet-Based Authentication (XMTP, Status)
              </h4>
              <p>
                Web3 messaging platforms use cryptographic wallet signatures for
                authentication. Users sign a message with their Ethereum wallet
                to establish identity, linking messaging to blockchain
                identities without requiring personal information.
              </p>

              <h4 className="text-lg font-medium mt-4 mb-1 text-gray-800">
                Double-Ratchet with Server Queues (SimpleX)
              </h4>
              <p>
                SimpleX uses randomly generated queue addresses instead of user
                identifiers. Each connection between users has separate send and
                receive queues with independent cryptographic identities,
                eliminating correlation between different conversations of the
                same user.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
                Privacy Implications
              </h3>
              <p>Identity approaches have direct privacy consequences:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <span className="font-medium">Highest privacy:</span> SimpleX
                  (no identifiers), Session (random keys), Briar (direct contact
                  only)
                </li>
                <li>
                  <span className="font-medium">Medium privacy:</span> Matrix
                  (usernames), Status/XMTP (wallet addresses)
                </li>
                <li>
                  <span className="font-medium">Lower privacy:</span> Signal
                  (phone numbers), Delta Chat (email addresses)
                </li>
              </ul>
            </div>
          </section>

          {/* Additional Security Features */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Additional Security Features
            </h2>

            <div className="prose max-w-none text-gray-700">
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                Disappearing Messages
              </h3>
              <p>
                Many apps implement ephemeral messaging where messages
                automatically delete after a specified time. Signal, Session,
                and others support this feature with varying implementation
                details:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Signal&apos;s implementation enforces deletion on both sender
                  and recipient devices
                </li>
                <li>
                  Message deletion timers typically range from seconds to weeks
                </li>
                <li>
                  Some implementations (like Briar) store messages only until
                  they&apos;re delivered and read
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
                Secure Backup Solutions
              </h3>
              <p>
                Secure backup mechanisms preserve privacy while allowing users
                to restore their data:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Signal&apos;s encrypted backups use a 30-digit passphrase
                </li>
                <li>
                  Matrix allows encrypted server-side backups with a recovery
                  key
                </li>
                <li>
                  Some apps (like Briar) prioritize security by avoiding backups
                  entirely
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
                Quantum Resistance
              </h3>
              <p>
                With the advent of quantum computing, some messaging apps are
                adopting post-quantum cryptography:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>SimpleX offers optional quantum-resistant encryption</li>
                <li>
                  This typically involves larger key sizes and alternative
                  mathematical approaches
                </li>
                <li>
                  Future-proofs communications against advances in quantum
                  computing
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
                Local Encryption
              </h3>
              <p>Beyond transit encryption, many apps encrypt data at rest:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Signal, Briar, and others encrypt all local storage</li>
                <li>
                  Some apps offer additional passcode/biometric protection
                </li>
                <li>
                  Prevents data access if the physical device is compromised
                </li>
              </ul>
            </div>
          </section>

          {/* Network Models */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Network Models and Privacy
            </h2>

            <div className="prose max-w-none text-gray-700">
              <p>
                The underlying network architecture significantly impacts
                privacy properties and resilience.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                Centralized
              </h3>
              <p>
                Signal uses centralized servers operated by the Signal
                Foundation. While messages are encrypted, the system depends on
                these servers for message delivery and contact discovery. This
                model is simpler but creates a single point of failure or
                control.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                Federated
              </h3>
              <p>
                Matrix operates on a federated model where anyone can run a
                server that interoperates with other Matrix servers. Users can
                choose their server provider or self-host, distributing trust
                across the network. This improves censorship resistance while
                maintaining compatibility.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                Peer-to-Peer
              </h3>
              <p>
                Briar and Jami use pure P2P connections, eliminating servers
                entirely. Messages travel directly between devices (when on the
                same local network) or through Tor/DHT when on different
                networks. This maximizes privacy and censorship resistance but
                can impact reliability and convenience.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                Blockchain-Adjacent
              </h3>
              <p>
                XMTP and Status leverage blockchain concepts without storing
                messages on-chain. They use decentralized node networks for
                message routing and storage, with wallet-based identities. This
                provides decentralization while keeping messages off public
                ledgers.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                Hybrid Approaches
              </h3>
              <p>
                Session uses a hybrid approach with decentralized message
                routing through the Oxen Service Node Network but client-server
                architecture for initial connections. SimpleX uses isolated
                server queues without central coordination, creating a
                privacy-focused middle ground.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

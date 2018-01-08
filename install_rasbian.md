### BUILD
- "sudo apt-get install gcc cmake libx11-dev libxtst-dev qt4-dev-tools libcurl4-openssl-dev libssl-dev libssl-dev libavahi-compat-libdnssd-dev"
- "cd ~/Downloads"
- "wget https://github.com/OrangeUtan/synergy-stable-builds/archive/v1.8.8-stable.zip"
- "unzip v1.8.8-stable.zip"
- "vim synergy-stable-builds-1.8.8-stable/src/lib/net/SecureSocket.cpp"
change line 810 'm_ssl->m_ssl->session->ciphers' to 'SSL_get_client_ciphers(m_ssl->m_ssl)' \
- "./hm.sh conf -g1"
- "./hm.sh build"

### INSTALL
- cd ~/Downloads
- "cp synergy-stable-builds-1.8.8-stable/bin /usr/bin"

### ISSUES:
- connection to server with SSL fails: 
  - start synergyc in debug mode: "synergyc -f -d DEBUG2 --enable-crypto -n name 123.456.789.01"
  - look for "NOTE: server fingerprint: FI:NG:GE:RP:IN:TH:ER:E5 \n ERROR: failed to verify ...."
  - copy and append fingerprint to ~/.synergy/SSL/Fingerprints/TrustedServers.txt


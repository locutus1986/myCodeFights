/* -- the problem --
An IP address is a numerical label assigned to each device
(e.g., computer, printer) participating in a computer network
that uses the Internet Protocol for communication. There are
two versions of the Internet protocol, and thus two versions
of addresses. One of them is the IPv4 address.

IPv4 addresses are represented in dot-decimal notation, which
consists of four decimal numbers, each ranging from 0 to 255
inclusive, separated by dots, e.g., 172.16.254.1.

Given a string, find out if it satisfies the IPv4 address naming rules.

*/

function isIPv4Address(inputString) {
    let ip = inputString.split('.')
    if(ip.length != 4) return false

    for(let i=0; i<ip.length;i++ ){
        console.log(ip)
        if(ip[i] < 0 || ip[i] > 255 || ip[i].length == 0 ||isNaN(ip[i])){
            return false
        }
    }
    return true

}

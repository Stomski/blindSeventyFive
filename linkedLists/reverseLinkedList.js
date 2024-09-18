/*

Given the head of a singly linked list, reverse the list, and return the reversed list.



Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]


Example 2:


Input: head = [1,2]
Output: [2,1]


Example 3:

Input: head = []
Output: []


Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000


Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?



so this is a pretty poorly worded problem, but to make it better, im going to apply these constraints:

you should return just the head of the reversed linked list, not the whole list

and also you should assume that each node has a value, an address in nenory, and a next, which is null if it is the end of the list


so it seems like i need a previous node, a current node, and then we slide down the row, reversing as we go, until we get to the end and return

making a func that takes a node

previousNode
currNode
next

while next, 
i want to make next currnode.next,
currNode.next becomes previous, 
currNode equels next  
 

*/

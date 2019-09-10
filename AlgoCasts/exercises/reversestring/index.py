str = 'coolbeans'

#TODO: SOLUTION 1
def reverseString(str):
    turn_to_array = list(str) # change STR to ARR
    # print(turn_to_array)
    reverse_array = turn_to_array[::-1] # EXTENDED SLICE SYNTAX, REVERSE arr chars 
    #print(reverse_array)
    turn_to_string = "".join(reverse_array) # change ARR to STR
    print(turn_to_string)
reverseString(str)

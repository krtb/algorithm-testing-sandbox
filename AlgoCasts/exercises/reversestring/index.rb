# BASICS
str = "coolbeans"
# puts adds a new line to the end of each argument if there is not one already.

# print does not add a new line.

# def printToScreen(str)
#     puts str
# end

# printToScreen(str)

#TODO: SOLUTION 1
def reverseString(str)
   turn_to_array = str.split('') # split CHARS into ARR
   # print turn_to_array
   reverse_array = turn_to_array.reverse() # reverse CHARS in ARR
   # print reverse_array
   turn_to_string = reverse_array.join('') # transform ARR to STR
   puts turn_to_string
end

#TODO: CLEAN SOLUTION 1
def reverseString(str)
   puts str.split('').reverse().join('')
end

#TODO: SOLUTION 2, EACH LOOP
def reverseString(str)
   turn_to_array = str.split('') # split CHARS into ARR
   reversed_string = ''

   turn_to_array.each do |char|
      reversed_string = char + reversed_string # EACH loop in RUBY only on ARRAYS
   end
   puts reversed_string
end

reverseString(str)
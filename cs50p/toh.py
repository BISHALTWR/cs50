count = 0

def main():
    global count
    n=int(input("Enter number of rings: "))
    solve_toh("a","b","c",n)
    print(f"Total number of moves: {count}")

def solve_toh(a,b,c,n): # n rings from a to b using c
    global count
    if(n==1):
        print(f"move 1 disc from {a} to {b}") # if one, move it
        count += 1
    else:
        solve_toh(a,c,b,n-1) # else, move n-1 from a to c using b
        print(f"move 1 disc from {a} to {b}")   # move 1 disc from a to b
        count += 1
        solve_toh(c,b,a,n-1) # move n-1 from c to b using a

if __name__ == "__main__":
    main()
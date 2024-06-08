string="the freiend is substring"
start=0
end=1000
print(string.index('substring',start,end))

def check(string,sub_str):
    if string.find(sub_str)==-1:
        print("NO")
    else:
        print("YES")

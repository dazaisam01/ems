# Context Provide data - we use centralized data method
# all componets are wrapped under same box 
# go to main.jsx wrapped app inside AuthConext and TaskContext but to see the other pages like Login 
# we can't directly access it therefore use childrean

# AuthContext contain e.g. samarth's all details about name,login,
# TaskContext all task list

# to clearn localStorage localStorage.clear();

# to provide all auth values to all folders use Authprovider 
new concept
# export const AuthContext = createContext();
# useContext
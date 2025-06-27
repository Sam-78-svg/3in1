import matplotlib.pyplot as plt
import numpy as np

y =np.array([36,44,55,69,85,103,121,138])
x=np.array([1951,1961,1971,1981,1991,2001,2011,'2023(p)'])
plt.title('Population of India (from 1947 to 2011)')
plt.xlabel('Years')
plt.ylabel('Population (in millions)')
plt.plot(x,y,color='blue', marker='o',linewidth=4)
plt.bar(x,y, color='red')
plt.show()


interface TotalPrice {
  price: number
  discount: number
  isInstallment: boolean
  months: number
}

const totalPrice = (obj: TotalPrice): number => {
  const withDiscount = obj.price - (obj.price * obj.discount) / 100
  return obj.isInstallment ? withDiscount / obj.months : withDiscount
}

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
})
console.log(price) // 6250

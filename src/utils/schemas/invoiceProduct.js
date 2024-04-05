const z = require("zod");

const invoiceProductSchema = z.object({
  invoice: z.number().int().positive(),
  product: z.number().int().positive(),
  quantity: z.number().int().positive(),
})

//validar factura safeparse devuelve un objeto indicando si hay error o no
function validateInvoiceProduct (object) {
  return invoiceProductSchema.safeParse(object)
}

module.exports = {
  validateInvoiceProduct
}
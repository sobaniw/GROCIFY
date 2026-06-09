import { useNavigate } from 'react-router'
import { Star } from 'lucide-react'
import type { Product } from '../../types'

interface Props {
    product: Product;
}

const ProductCard = ({ product }: Props) => {

    const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "$";

    const { addToCart } = { addToCart: (_data: Product) => {} }
    const navigate = useNavigate()

    return (
        <div
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition-all duration-300 group animate-fade-in cursor-pointer"
            onClick={() => navigate(`/products/${product._id}`)}
        >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover p-4 group-hover:p-2 transition-all duration-300"
                />
                {/* Discount Badge */}
                {product.discount > 0 && (
                    <div className="absolute top-2 left-2">
                        <span className="px-2 py-0.5 text-[10px] font-semibold uppercase bg-app-orange text-white rounded-full">
                            {product.discount}% OFF
                        </span>
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="p-3 text-zinc-700">
                <h3 className="text-sm leading-snug mb-1.5 line-clamp-2">{product.name}</h3>

                {/* Rating */}
                {product.rating > 0 && (
                    <div className="flex items-center gap-1 mb-2">
                        <Star className="size-3 text-app-warning fill-app-warning" />
                        <span className="text-xs font-medium text-app-text">{product.rating}</span>
                        <span className="text-xs text-app-text-light">({product.reviewCount})</span>
                    </div>
                )}

                {/* Price + Add Button */}
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-sm font-bold">
                            {currency}{product.price}
                        </span>
                        <span className="text-xs text-app-text-light">
                            /{product.unit}
                        </span>
                        {product.originalPrice > product.price && (
                            <span className="text-xs text-app-text-light line-through">
                                {currency}{product.originalPrice}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={(e) => { e.stopPropagation(); addToCart(product) }}
                        className="size-7 flex items-center justify-center rounded-full bg-app-orange text-white text-lg font-bold hover:bg-app-orange-dark transition-colors shrink-0"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
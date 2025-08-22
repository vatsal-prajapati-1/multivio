'use client';
import React, { useState } from 'react';
import { ChevronRight, Plus, Trash, X } from 'lucide-react';
import Link from 'next/link';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from 'apps/seller-ui/src/utils/axiosInstance';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Input from 'packages/components/input';

const page = () => {
  const [showModel, setShowModel] = useState(false);

  const queryClient = useQueryClient();

  const { data: discountCodes = [], isLoading } = useQuery({
    queryKey: ['shop-discounts'],
    queryFn: async () => {
      const res = await axiosInstance.get('/product/api/get-discount-codes');
      return res?.data?.discount_codes || [];
    },
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      public_name: '',
      discountType: 'percentage',
      discountValue: '',
      discountCodes: '',
    },
  });

  const createDiscountCodeMutation = useMutation({
    mutationFn: async (data) => {
      await axiosInstance.post('/product/api/create-discount-code', data);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['shop-discounts'] });
      reset();
      setShowModel(false);
    },
  });

  const handleDeleteClick = async (discount: any) => {
    console.log('discount', discount);
  };

  const onSubmit = (data: any) => {
    if (discountCodes.length >= 8) {
      toast.error('You can only create up to 8 discount codes.');
    }
  };

  return (
    <div className="w-full min-h-screen p-8">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-2xl text-white font-semibold">Discount Codes</h2>
        <button
          className="bg-blue-600 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          onClick={() => setShowModel(true)}
        >
          <Plus size={18} /> Create Discount
        </button>
      </div>

      {/* Breadcrumbs */}

      <div className="flex items-center text-white">
        <Link href={'/dashboard'} className="text-[#80Deea] cursor-pointer">
          Dashboaard
        </Link>

        <ChevronRight size={20} className="opacity-[.8]" />

        <span>Discount Codes</span>
      </div>

      <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-lg ">
        <h3 className="text-lg font-semibold text-white mb-4">
          Your Discount Codes
        </h3>
        {isLoading ? (
          <p className="text-gray-400 text-center">Loading discounts ...</p>
        ) : (
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Value</th>
                <th className="p-3 text-left">Code</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {discountCodes?.map((discount: any) => (
                <tr
                  key={discount?.id}
                  className="border-b border-gray-800 hover:bg-gray-800 transition"
                >
                  <td className="p-3">{discount?.public_name}</td>
                  <td className="p-3 capitalize">
                    {discount.discountType === 'percentage'
                      ? 'Percentage (%)'
                      : 'Flat ($)'}
                  </td>

                  <td className="p-3">
                    {discount.discountType === 'percentage'
                      ? `${discount.discountValue}%`
                      : `$${discount.discountValue}`}
                  </td>
                  <td className="p-3">{discount.discountCode}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDeleteClick(discount)}
                      className="text-red-400 hover:text-red-300 transition"
                    >
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!isLoading && discountCodes?.length === 0 && (
          <p className="text-gray-400 w-full pt-4 text-center">
            No Discount Codes Available!
          </p>
        )}
      </div>

      {/* Create Discount modal */}

      {showModel && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-[450px] shadow-lg">
            <div className="flex justify-between items-center border-b border-gray-700 pb-3">
              <h3 className="text-xl text-white">Create Discount Code</h3>
              <button
                onClick={() => setShowModel(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              {/* Title */}
              <Input
                label="Title (Public Name)"
                {...register('public_name', {
                  required: 'Title is required',
                })}
              />
              {errors.public_name && (
                <p className="text-rose-500 text-xs mt-1">
                  {errors.public_name.message as string}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;

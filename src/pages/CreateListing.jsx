import React, {useState} from "react";

export default function CreateListing() {
    const [formData, setFormData] = useState({
        type: "house",
        name: "",
        bedrooms: 1,
        bathrooms: 1,
        parking: false,
        furnished: false,
        address: "",
        description: "",
        offer: false,
        regularPrice: 50000,
        discountPrice: 5000
    });
    const {
        type,
        name,
        bedrooms,
        bathrooms,
        parking,
        address,
        furnished,
        description,
        offer,
        regularPrice,
        discountPrice
    } = formData;
    function onChange() {}
    return (
        <main className="max-w-md px-2 mx-auto">
            <h1 className="text-3xl text-center mt-6 font-bold">숙소 등록</h1>
            <form>
                <p className="text-lg mt-6 font-semibold">숙소 종류</p>
                <div className="flex">
                    <button
                        type="button"
                        id="type"
                        value="lodging"
                        onClick={onChange}
                        className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
                        ${
                        type === "house"
                            ? "bg-white text-black"
                            : "bg-slate-600 text-white"}`}>
                        호텔 / 리조트
                    </button>
                    <button
                        type="button"
                        id="type"
                        value="lodging"
                        onClick={onChange}
                        className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full 
                        ${
                        type === "hotel/resort"
                            ? "bg-white text-black"
                            : "bg-slate-600 text-white"}`}>
                        펜션 / 게스트 하우스
                    </button>
                </div>
                <p className="text-lg mt-6 font-semibold">이름</p>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={onChange}
                    placeholder="이름"
                    maxLength="32"
                    minLength="10"
                    required="required"
                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded trasition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
                <div className="flex space-x-6 mb-6">
                    <div>
                        <p className="text-lg font-semibold">침대</p>
                        <input
                            type="number"
                            id="bedrooms"
                            value={bedrooms}
                            onChange={onChange}
                            min="1"
                            max="50"
                            required="required"
                            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"/>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">화장실</p>
                        <input
                            type="number"
                            id="bedrooms"
                            value={bathrooms}
                            onChange={onChange}
                            min="1"
                            max="50"
                            required="required"
                            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"/>
                    </div>
                </div>
                <p className="text-lg mt-6 font-semibold">주차</p>
                <div className="flex">
                    <button
                        type="button"
                        id="parking"
                        value={true}
                        onClick={onChange}
                        className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
                        ${
                        !parking
                            ? "bg-white text-black"
                            : "bg-slate-600 text-white"}`}>
                        O
                    </button>
                    <button
                        type="button"
                        id="parking"
                        value={false}
                        onClick={onChange}
                        className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full 
                        ${
                        parking
                            ? "bg-white text-black"
                            : "bg-slate-600 text-white"}`}>
                        X
                    </button>
                </div>
                <p className="text-lg mt-6 font-semibold">생활용품</p>
                <div className="flex">
                    <button
                        type="button"
                        id="furnished"
                        value={true}
                        onClick={onChange}
                        className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
                        ${
                        !furnished
                            ? "bg-white text-black"
                            : "bg-slate-600 text-white"}`}>
                        O
                    </button>
                    <button
                        type="button"
                        id="furnished"
                        value={false}
                        onClick={onChange}
                        className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full 
                        ${
                        furnished
                            ? "bg-white text-black"
                            : "bg-slate-600 text-white"}`}>
                        X
                    </button>
                </div>
                <p className="text-lg mt-6 font-semibold">주소</p>
                <textarea
                    type="text"
                    id="address"
                    value={address}
                    onChange={onChange}
                    placeholder="주소"
                    required="required"
                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded trasition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
                <p className="text-lg font-semibold">설명</p>
                <textarea
                    type="text"
                    id="description"
                    value={description}
                    onChange={onChange}
                    placeholder="설명"
                    required="required"
                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded trasition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
                <p className="text-lg font-semibold">할인</p>
                <div className="flex mb-6">
                    <button
                        type="button"
                        id="offer"
                        value={true}
                        onClick={onChange}
                        className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
                        ${
                        !offer
                            ? "bg-white text-black"
                            : "bg-slate-600 text-white"}`}>
                        O
                    </button>
                    <button
                        type="button"
                        id="offer"
                        value={false}
                        onClick={onChange}
                        className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full 
                        ${
                        offer
                            ? "bg-white text-black"
                            : "bg-slate-600 text-white"}`}>
                        X
                    </button>
                </div>
                <div className="flex items-center mb-6">
                    <div className="">
                        <p className="text-lg font-semibold">정가</p>
                        <div className="flex w-full justify-center items-center space-x-6">
                            <input
                                type="number"
                                id="regularPrice"
                                value={regularPrice}
                                onChange={onChange}
                                min="50000"
                                max="1000000"
                                required="required"
                                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"/> {
                                type === "house" && (
                                    <div className="">
                                        <p className="text-md w-full whitespace-nowrap">원 / Month</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                {
                    offer && (
                        <div className="flex items-center mb-6">
                            <div className="">
                                <p className="text-lg font-semibold">할인가</p>
                                <div className="flex w-full justify-center items-center space-x-6">
                                    <input
                                        type="number"
                                        id="discountPrice"
                                        value={discountPrice}
                                        onChange={onChange}
                                        min="45000"
                                        max="9800000"
                                        required="required"
                                        className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"/>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="mb-6">
                    <p className="text-lg font-semibold">이미지</p>
                    <p className="text-gray-600">첫 번째 이미지가 표지가 됩니다(최대 6개)</p>
                    <input
                        type="file"
                        id="images"
                        onChange={onChange}
                        accept=".png,.jpg,.jpeg"
                        multiple
                        required
                        className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
                    />
                </div>
                <button type="submit" className="mb-6 w-full px-7 py-3 bg-red-400 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-red-500 hover:shadow-lg focus:bg-red-500 focus:shadow-lg active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out">등록하기</button>
            </form>
        </main>
    );
}

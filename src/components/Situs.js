import * as React from "react";

function MyComponent(props) {
  return (
    <div className="bg-white">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
          <div className="flex-col fill-zinc-100 overflow-hidden relative flex aspect-[0.23802612481857766] grow pt-5 pb-12 px-7 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab52976fe3ebf89ecbd88d80ad0bc41a1978ce3db37e1c39cf08cce9e38149c7?"
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <div className="relative self-stretch flex items-stretch justify-between gap-5">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.13] object-contain object-center w-[97px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0aa3beded31f70c4235b657b9f8840d38ad3cb8378a44ca32e0ad09db3635d4?"
                className="aspect-[0.97] object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full mt-3 self-start"
              />
            </div>
            <div className="relative flex items-stretch gap-4 ml-5 mt-8 self-start max-md:ml-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/837c95523f67328d3761f610b6ab0898dc68b17c02848663a7bbc32374eb7649?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-xl font-bold w-full self-start">
                Dasbor
              </div>
            </div>
            <div className="relative flex items-stretch gap-4 ml-5 mt-12 self-start max-md:ml-2.5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1984e0727e7c43f0a5a5ba4994a26dc583e467942f4925929a71170a83ced05a?"
                className="aspect-[0.75] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-xl font-bold self-center grow whitespace-nowrap my-auto">
                Kategori Produk
              </div>
            </div>
            <div className="relative flex items-stretch gap-4 ml-5 mt-11 self-start max-md:ml-2.5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/03534ad028f7d7e5f0c4e579e56d7da0741b176ff69e9ca4cfd3be768d2d1297?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-xl font-bold grow whitespace-nowrap self-start">
                Produk
              </div>
            </div>
            <div className="relative flex items-stretch gap-4 ml-5 mt-9 self-start max-md:ml-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc5485fea000ff48c3b1e536c60663e0256bfcd08052dfc560ba32d12be25aed?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-xl font-bold self-center grow whitespace-nowrap my-auto">
                Pesanan
              </div>
            </div>
            <div className="relative flex items-stretch gap-4 ml-5 mt-12 self-start max-md:ml-2.5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/87f9ce1875cbb325a240985f163bd3f0c416fa0b13e6ab51720663af3f4c68be?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-xl font-bold self-center grow whitespace-nowrap my-auto">
                Pembayaran
              </div>
            </div>
            <div className="relative flex items-stretch gap-4 ml-5 mt-10 self-start max-md:ml-2.5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5822f829419408d7f8c16941c69bff770a7a21719f0e31fa3f2f7c3019d80243?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-xl font-bold self-center grow whitespace-nowrap my-auto">
                Pelanggan
              </div>
            </div>
            <div className="relative self-center flex items-stretch gap-4 mt-10 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c926b6fa640e91501ac813c51d3709accaa8914af21bf058a6e3eddcc557bc5?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-xl font-bold grow whitespace-nowrap mt-1.5 self-start">
                Review Pelanggan
              </div>
            </div>
            <div className="relative flex items-stretch gap-4 ml-5 mt-10 mb-[540px] self-start max-md:ml-2.5 max-md:my-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c761b7057493f8796b262b23c010f7b52f4d21a935591207e40e610cc6e810be?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-xl font-bold self-center grow whitespace-nowrap my-auto">
                Kontak
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col mt-3 max-md:max-w-full">
            <div className="self-center flex w-full max-w-[1016px] justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
              <div className="bg-white flex items-stretch gap-3.5 mt-1.5 pl-4 pr-20 py-2.5 rounded-3xl max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3186a90ef2a5811ec72e693d675dc8fa7f64176b0a3a6767134fcfd18ca96fa4?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-opacity-50 text-base self-center grow whitespace-nowrap my-auto">
                  Cari...
                </div>
              </div>
              <div className="flex items-stretch gap-4 px-5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[0.98] object-contain object-center w-11 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-xl font-bold self-center grow whitespace-nowrap my-auto">
                  Satriawan
                </div>
              </div>
            </div>
            <div className="bg-white self-stretch shrink-0 h-[3px] mt-2.5 max-md:max-w-full" />
            <div className="self-center flex w-full max-w-[1020px] justify-between gap-5 mt-14 px-5 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="text-white text-xl font-bold grow whitespace-nowrap">
                Pengaturan Situs
              </div>
              <div className="flex items-stretch gap-2 max-md:justify-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e19db245c43bc53bda43b422e0dcf2dd52a2cf59fb6802953d52a14f7ba3ec2a?"
                  className="aspect-[1.26] object-contain object-center w-6 fill-zinc-50 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-xl self-center my-auto">-</div>
                <div className="text-white text-base font-bold whitespace-nowrap mt-1.5 self-start">
                  Pengaturan{" "}
                </div>
              </div>
            </div>
            <div className="self-center w-full max-w-[1023px] mt-14 max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[61%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-9">
                    <div className="flex-col fill-zinc-100 overflow-hidden relative flex min-h-[567px] w-full pt-5 pb-11 px-6 max-md:max-w-full max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1583b6d8846f43e56e8a00fb5efd45ee44c0540adcd0d442746e26e3f0e75bb1?"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <div className="relative text-black text-base font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                        Identitas Toko
                      </div>
                      <div className="relative text-black text-opacity-50 text-center text-base font-bold self-stretch whitespace-nowrap mt-12 max-md:max-w-full max-md:mt-10">
                        Nama Toko:{" "}
                      </div>
                      <div className="relative text-black text-opacity-50 text-center text-base whitespace-nowrap border self-stretch justify-center mt-2.5 pl-3 pr-16 py-3 rounded-md border-solid border-neutral-500 items-start max-md:max-w-full max-md:pr-5">
                        Toko Satriawan
                      </div>
                      <div className="relative flex w-[335px] max-w-full justify-between gap-5 mt-9 self-start items-start">
                        <div className="text-black text-opacity-50 text-center text-base font-bold whitespace-nowrap">
                          No.HP:{" "}
                        </div>
                        <div className="text-black text-opacity-50 text-center text-base font-bold whitespace-nowrap">
                          Email:{" "}
                        </div>
                      </div>
                      <div className="relative self-stretch flex items-stretch justify-between gap-4 mt-2 px-px max-md:max-w-full max-md:flex-wrap">
                        <div className="text-black text-opacity-50 text-center text-base whitespace-nowrap border grow justify-center pl-3 pr-16 py-3 rounded-md border-solid border-neutral-500 items-start max-md:pr-5">
                          082377665544
                        </div>
                        <div className="text-black text-opacity-50 text-center text-base whitespace-nowrap border grow justify-center items-stretch pl-3.5 pr-16 py-2.5 rounded-md border-solid border-neutral-500 max-md:pr-6">
                          tokosatriawan@gmail.com
                        </div>
                      </div>
                      <div className="relative text-black text-opacity-50 text-center text-base font-bold self-stretch whitespace-nowrap mt-8 max-md:max-w-full">
                        Alamat:{" "}
                      </div>
                      <div className="relative text-black text-opacity-50 text-center text-base whitespace-nowrap border self-stretch justify-center mt-2 pl-3 pr-16 py-3 rounded-md border-solid border-neutral-500 items-start max-md:max-w-full max-md:pr-5">
                        Jl. Merdeka Barat Km 01-Jakarta Indonesia
                      </div>
                      <div className="relative text-black text-opacity-50 text-center text-base font-bold self-stretch whitespace-nowrap mt-8 max-md:max-w-full">
                        Tagline:{" "}
                      </div>
                      <div className="relative text-black text-opacity-50 text-center text-base whitespace-nowrap border self-stretch justify-center mt-1 pl-2.5 pr-16 py-4 rounded-md border-solid border-neutral-500 items-start max-md:max-w-full max-md:pr-5">
                        Segar Buah Sayurku
                      </div>
                      <div className="relative text-black text-opacity-50 text-center text-base font-bold self-stretch whitespace-nowrap mt-7 max-md:max-w-full">
                        Deskripsi:{" "}
                      </div>
                      <div className="relative text-black text-opacity-50 text-center text-base whitespace-nowrap border self-stretch mt-1 pl-2.5 pr-16 pt-2 pb-12 rounded-md border-solid border-neutral-500 items-start max-md:max-w-full max-md:pr-5">
                        Belanja buah dan sayur segar dengan murah, mudah, dan
                        cepat
                      </div>
                    </div>
                    <div className="bg-zinc-100 flex flex-col mt-11 pt-3 pb-6 rounded-xl max-md:max-w-full max-md:mt-10">
                      <div className="self-center flex w-[539px] max-w-full items-center justify-between gap-5 px-5 max-md:flex-wrap">
                        <div className="text-black text-base font-bold grow whitespace-nowrap my-auto">
                          Pengaturan Pembayaran
                        </div>
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="aspect-[1.06] object-contain object-center w-[34px] overflow-hidden self-stretch shrink-0 max-w-full"
                        />
                      </div>
                      <div className="bg-zinc-300 self-stretch shrink-0 h-px mt-2.5 max-md:max-w-full" />
                      <div className="bg-lime-600 self-stretch flex flex-col items-stretch mt-6 px-10 py-9 rounded-md max-md:max-w-full max-md:px-5">
                        <div className="text-white text-center text-base font-bold whitespace-nowrap max-md:max-w-full">
                          Nama Bank:{" "}
                        </div>
                        <div className="text-black text-opacity-50 text-center text-base whitespace-nowrap bg-white justify-center mt-4 pl-3.5 pr-16 py-2.5 rounded-md items-start max-md:max-w-full max-md:pr-5">
                          Mandiri
                        </div>
                        <div className="flex items-stretch justify-between gap-5 mt-7 max-md:max-w-full max-md:flex-wrap">
                          <div className="flex grow basis-[0%] flex-col items-stretch">
                            <div className="text-white text-center text-base font-bold whitespace-nowrap">
                              No. Rekening:{" "}
                            </div>
                            <div className="flex-col text-black text-opacity-50 text-center text-base relative whitespace-nowrap overflow-hidden self-center aspect-[9.214285714285714] w-[258px] justify-center mt-3 pl-3 pr-16 py-2.5 items-start max-md:pr-5">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/af9915012f4ba709e775a37cd9f22845e7f3fa3142c87e154813e2fc029db7a8?"
                                className="absolute h-full w-full object-cover object-center inset-0"
                              />
                              1234567890
                            </div>
                          </div>
                          <div className="flex grow basis-[0%] flex-col items-stretch">
                            <div className="text-white text-center text-base font-bold whitespace-nowrap">
                              Nama Pemilik:{" "}
                            </div>
                            <div className="flex-col text-black text-opacity-50 text-center text-base relative whitespace-nowrap overflow-hidden self-center aspect-[8.785714285714286] justify-center items-stretch mt-4 py-2.5">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd31ad950276d0fe34853bcd6335a8f49c6dca436bb1813f941d6bf9e53fcb83?"
                                className="absolute h-full w-full object-cover object-center inset-0"
                              />
                              Toko Satriawan
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-lime-600 self-stretch flex flex-col items-stretch mt-3 pt-6 pb-11 px-10 rounded-md max-md:max-w-full max-md:px-5">
                        <div className="text-white text-center text-base font-bold whitespace-nowrap max-md:max-w-full">
                          Nama Bank:{" "}
                        </div>
                        <div className="text-black text-opacity-50 text-center text-base whitespace-nowrap bg-white justify-center mt-4 pl-3 pr-16 py-2.5 rounded-md items-start max-md:max-w-full max-md:pr-5">
                          BCA
                        </div>
                        <div className="flex items-stretch justify-between gap-5 mt-9 max-md:max-w-full max-md:flex-wrap">
                          <div className="flex grow basis-[0%] flex-col items-stretch">
                            <div className="text-white text-center text-base font-bold whitespace-nowrap">
                              No. Rekening:{" "}
                            </div>
                            <img
                              loading="lazy"
                              srcSet="..."
                              className="aspect-[8.6] object-contain object-center w-[258px] overflow-hidden self-center mt-2"
                            />
                          </div>
                          <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                            <div className="text-white text-center text-base font-bold whitespace-nowrap">
                              Nama Pemilik:{" "}
                            </div>
                            <div className="flex-col text-black text-opacity-50 text-center text-base relative whitespace-nowrap overflow-hidden self-center aspect-[8.785714285714286] justify-center items-stretch mt-2.5 py-2.5">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd31ad950276d0fe34853bcd6335a8f49c6dca436bb1813f941d6bf9e53fcb83?"
                                className="absolute h-full w-full object-cover object-center inset-0"
                              />
                              Toko Satriawan
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col px-5 max-md:mt-9">
                    <div className="bg-zinc-100 self-stretch flex flex-col pt-5 pb-9 rounded-xl items-start">
                      <div className="text-black text-base font-bold ml-6 max-md:ml-2.5">
                        Logo
                      </div>
                      <div className="bg-zinc-300 self-stretch shrink-0 h-px mt-4" />
                      <div className="self-stretch flex flex-col items-stretch mt-8 px-7 max-md:px-5">
                        <div className="text-black text-opacity-50 text-center text-base font-bold whitespace-nowrap">
                          Foto:{" "}
                        </div>
                        <div className="border flex items-stretch justify-between gap-3.5 mt-5 pl-4 pr-14 py-3 rounded-md border-solid border-neutral-500 max-md:pr-5">
                          <div className="text-black text-base font-bold whitespace-nowrap border justify-center items-stretch px-2.5 py-2 rounded-md border-solid border-zinc-900">
                            Pilih File
                          </div>
                          <div className="text-black text-opacity-50 text-base self-center grow whitespace-nowrap my-auto">
                            Tidak ada file yang dipilih
                          </div>
                        </div>
                        <div className="text-black text-opacity-50 text-center text-base mt-2">
                          Pilih foto PNG atau JPG dengan ukuran{" "}
                        </div>
                        <div className="text-black text-opacity-50 text-center text-base whitespace-nowrap mt-2.5">
                          maksimal 2MB
                        </div>
                      </div>
                    </div>
                    <div className="bg-zinc-100 self-stretch flex w-full flex-col items-stretch mt-8 pt-4 pb-8 px-6 rounded-xl max-md:px-5">
                      <div className="text-black text-base font-bold">
                        Belanja
                      </div>
                      <div className="text-black text-opacity-50 text-center text-base font-bold whitespace-nowrap mt-12 max-md:mt-10">
                        Ongkos Kirim:{" "}
                      </div>
                      <div className="border flex items-stretch gap-2.5 mt-5 pl-3 pr-20 rounded-md border-solid border-neutral-500 max-md:pr-5">
                        <div className="text-black text-opacity-50 text-center text-base self-center whitespace-nowrap my-auto">
                          Rp
                        </div>
                        <div className="bg-neutral-400 w-px shrink-0 h-[49px]" />
                        <div className="text-black text-opacity-50 text-center text-base self-center whitespace-nowrap my-auto">
                          Sesuai Jarak
                        </div>
                      </div>
                      <div className="text-black text-opacity-50 text-center text-base font-bold whitespace-nowrap mt-7">
                        Minimal belanja untuk gratis ongkir:{" "}
                      </div>
                      <div className="border flex items-stretch gap-2.5 mt-3.5 pl-3 pr-20 rounded-md border-solid border-neutral-500 max-md:pr-5">
                        <div className="text-black text-opacity-50 text-center text-base self-center whitespace-nowrap my-auto">
                          Rp
                        </div>
                        <div className="bg-gray-600 w-px shrink-0 h-[49px]" />
                        <div className="text-black text-opacity-50 text-center text-base self-center whitespace-nowrap my-auto">
                          30.000
                        </div>
                      </div>
                    </div>
                    <div className="bg-zinc-100 self-stretch flex flex-col justify-center mt-11 pl-5 pr-16 py-6 rounded-md items-start max-md:mt-10 max-md:pr-5">
                      <div className="flex-col text-white text-center text-base font-bold relative whitespace-nowrap fill-lime-600 overflow-hidden aspect-[2.8333333333333335] justify-center items-stretch px-8 py-3.5 max-md:px-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c64a5e111acffe5b6f413a3088082cb1405c22f3f057df35583413ff2881d011?"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        Simpan{" "}
                      </div>
                    </div>
                    <div className="text-lime-600 text-center text-base font-bold self-center mt-24 max-md:mt-10">
                      <span className="font-bold text-black text-opacity-50">
                        © 2023
                      </span>
                      <span className="font-bold text-black"> </span>
                      <span className="font-semibold text-lime-600">
                        Fruvego Corporation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



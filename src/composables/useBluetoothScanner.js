// import { BleClient } from "@capacitor-community/bluetooth-le";
import { BluetoothLe } from "@capacitor-community/bluetooth-le";
import { ref } from "vue";


export function useBluetoothScanner(){

  const scanResults = ref([]);
  const scanning = ref(false)

  async function scan() {
    await BluetoothLe.initialize();

    scanning.value= true
    // await BleClient.initialize({ androidNeverForLocation: true });
    await BluetoothLe.requestLEScan({}, (result) => {
      scanResults.value.push(result);
    })

      setTimeout(async()=>{
        await BluetoothLe.stopLEScan()
        scanning.value =false
      },7000)
  }




  scan();



  return {
      scanResults,
      scanning,
      scan
  }

}

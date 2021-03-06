import {OrderedMap, Record} from 'immutable'

export function arrToMap(arr, DataRecord = Record) {
  return arr.reduce((acc, item) =>
      acc.set(item, new DataRecord({address: item}))
    , new OrderedMap({}))
}

export function mapToArr(map) {
  return map.toIndexedSeq().toArray()
}

export function mapToStrOfAddresses(map) {
  return (Array.isArray(map) ? map : mapToArr(map))
    .map(v => v.address).join(',')
}
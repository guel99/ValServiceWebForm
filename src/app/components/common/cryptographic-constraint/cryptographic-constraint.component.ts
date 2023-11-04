import { Component, OnInit } from '@angular/core';
import { CryptographicConstraintDTO } from 'src/app/model/dto/cryptographic-constraint-dto';
import { Algo } from 'src/app/model/enums/policy/dto/Algo';
import { LevelConstraintComponent } from '../level-constraint/level-constraint.component';

@Component({
  selector: 'app-cryptographic-constraint',
  templateUrl: './cryptographic-constraint.component.html',
  styleUrls: ['./cryptographic-constraint.component.css']
})
export class CryptographicConstraintComponent extends LevelConstraintComponent implements OnInit {

  // TODO - put this lists on config folder
  readonly availableEncryptionAlgos: Array<string> = ["DSA", "RSA", "ECDSA", "PLAIN-ECDSA", "Ed25519"];

  readonly availableDigestAlgos: Array<string> = ["MD2", "MD5", "SHA1", "SHA224", "SHA256", "SHA384", "SHA512", "SHA3-224", "SHA3-256", "SHA3-384", "SHA3-512", "RIPEMD160", "WHIRLPOOL"];

  /**
   * The new encryption algo introduced in the form
   */
  newEncryptionAlgo: string;

  /**
   * The new encryption algo key size introduced in the form
   */
  newEncryptionAlgoKeySize: number;

  /**
   * The new digest algo introduced in the form
   */
   newDigestAlgo: string;



  /**
   * Acceptable encryption algorithms selected to the constraint
   */
  acceptableEncryptionAlgo: Map<string, Algo>;

  /**
   * Tells if the list of encryption algos is completed (closed)
   */
  encryptionChecked: boolean;

  /**
   * Acceptable digest algorithms selected to the constraint
   */
  acceptableDigestAlgo: Map<string, Algo>;

  /**
   * Tells if the list of digest algos is completed (closed)
   */
  digestChecked: boolean;

  constructor() { 
    super (); 
    this.acceptableDigestAlgo = new Map<string, Algo>();
    this.acceptableEncryptionAlgo = new Map<string, Algo>();
  }

  override ngOnInit(): void {
  }

  override setLevel(): void {
      this.selected = this.selected?.toUpperCase();
      var cryptographic = new CryptographicConstraintDTO();

      // here we have to build another instance because the format required in the dto object
      this.acceptableEncryptionAlgo.forEach(algo => {
        var encAlgo = new Algo();
        encAlgo.value = algo.value;
        var minKeySize = new Algo();
        minKeySize.value = algo.value;
        minKeySize.size = algo.size;
        cryptographic.acceptableEncryptionAlgo.push(encAlgo);
        cryptographic.miniPublicKeySize.push(minKeySize);
      });
      // in the digest algos case, the object has already the required format to be sent to the server
      this.acceptableDigestAlgo.forEach(algo => {
        cryptographic.acceptableDigestAlgo.push(algo)
      });
      cryptographic.level = this.selected!;
      this.setted.emit(cryptographic);
  }

  /**
   * Add a new encryption algo to the selected list
   * @param algo The algo name
   * @param key The min key length
   */
  addEncryptionAlgo(algo:string, key: number){
    var newAlgo = new Algo();
    newAlgo.value = algo;
    newAlgo.size = key;
    if(!this.acceptableEncryptionAlgo.has(algo))
      this.acceptableEncryptionAlgo.set(algo, newAlgo);
  }

  /**
   * Add a new digest algo to the selected list
   * @param algo The algo name
   */
  addDigestAlgo(algo:string){
    var newAlgo = new Algo();
    newAlgo.value = algo;
    newAlgo.size = undefined;
    if(!this.acceptableDigestAlgo.has(algo))
      this.acceptableDigestAlgo.set(algo, newAlgo);
  }

  /**
   * Removes an encryption algo from the list
   * @param algo
   */
  removeEncryptionAlgo(algo: string){
    this.acceptableEncryptionAlgo.delete(algo);
  }

  /**
   * 
   * @param algo Removes a digest algo from the list
   */
  removeDigestAlgo(algo: string){
    this.acceptableDigestAlgo.delete(algo);
  }

  private globallyChecked() {
    return this.encryptionChecked && this.digestChecked;
  }

  /**
   * Triggered when the encryption edit button is clicked
   */
  editEncryptionAlgoList() {

    var globallyChecked = this.globallyChecked();
    this.encryptionChecked = false;
    // if the constraint was ready to sent we collapse it
    if (globallyChecked)
      this.collapsed.emit();
  }

  /**
   * Triggered when the digest list edit button is clicked
   */
  editDigestAlgoList(){
    var globallyChecked = this.globallyChecked();
    this.digestChecked = false;
    // if the constraint was ready to sent we collapse it
    if (globallyChecked)
      this.collapsed.emit();
  }

}
